---
title: 🏁Hackathon BEST Hack’22
tags:
  - java
  - postgresql
  - hackaton
  - server
---
# [🏁GitHub BEST Hack’22](https://github.com/Kanzu32/FinalBestHack-2022-Kanzu)

## Technologies
* Java;
* PostgreSQL.

## Description of the task
The service works with data about gas stations - it receives and sends it in a given format. There are many different sources, ranging from `.csv` files to databases. Therefore, you need to write a service in Spring Boot with a standard ORM, which will take data from several different sources, and will convert it into one format, and then save it into its own database, without the need for additional conversion of the service code (you need to put this in a separate file with settings). The transformation must be single-level, that is, without nested entities. Since there will be a lot of different data, test data is not provided (however, provisions must be made so that different data can be passed into the program). No database provided.

## Problem solution
Our team has developed a service that allows you to aggregate data from files with the extensions `xml`, `csv`, `json`. The SOAP protocol format and the REST architectural approach are supported. The `application.properties` file specifies the extension of the transferred file in the `in_format` parameter, as well as the data for connecting to the database. Examples:

```java
 in_format=xml
```

```java
 in_format=csv
```
 
```java
 in_format=xml
```

The database has one table consisting of 8 fields. PostgreSQL DBMS is used. You can create a table by running an sql query:

```java
 CREATE TABLE IF NOT EXISTS public.table1
(
    name character varying COLLATE pg_catalog."default" NOT NULL,
    address character varying COLLATE pg_catalog."default" NOT NULL,
    latitude character varying COLLATE pg_catalog."default" NOT NULL,
    longtitude character varying COLLATE pg_catalog."default" NOT NULL,
    country character varying COLLATE pg_catalog."default" NOT NULL,
    phone character varying COLLATE pg_catalog."default" NOT NULL,
    region character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Table1_pkey" PRIMARY KEY (name)
)
```

To send a file to the service, you can use the Postman program. After specifying the file extension, you must send a post request with the file. The service checks whether the extension of the received file matches the extension specified in `application.properties`. If the extensions do not match, then the exception "This format is not supported." is thrown. If the save is successful, the service will return the message “File added to the database.”. Next, a specific function is called for the required format. The function to handle this logic is:

```java
public String handleFileUpload(@RequestParam("file") MultipartFile file) throws IOException, ParserConfigurationException, SAXException, XMLStreamException {
		String rawType = file.getContentType();
		String type = rawType.substring(rawType.lastIndexOf("/")+1);
		if (!type.equals(format)) {
			throw new IOException("Формат полученного файла не совпадает с форматом, указанным в настройках.");
		} else if (format.equals("json")) {
			convertService.parseFromJSON(file);
		} else if (format.equals("csv")){
			convertService.parseFromCSV(file);
		} else if (format.equals("xml") || format.equals("soap")){
			convertService.parseFromXML(file);
		} else {
			throw new IOException("Данный формат не поддерживается.");
		}
		return file.getContentType();

	}
```

To process different files, the `class ConvertServiceImpl` is used, it inherits from the `ConvertService` interface; when implementing other files, you need to add a function to this interface and implement it in the `ConvertServiceImpl` class.

```java
public interface ConvertService {
	void parseFromJSON(MultipartFile file) throws IOException;
	void parseFromXML(MultipartFile file) throws SAXException, IOException, ParserConfigurationException, XMLStreamException;
	void parseFromCSV(MultipartFile file) throws IOException;
}
```

### Processing json files
The Gson library is used for processing. From json, the data is converted into a collection, then a check is made for duplication of data in the name field in the database and if there is no such data, a record is made. Function for processing json files:

```java
public void parseFromJSON(MultipartFile file) throws IOException {
		Gson gson = new Gson();
		Type userListType = new TypeToken<ArrayList<Station>>(){}.getType();
		String str = new String(file.getBytes());
		List<Station> stationListJSON = gson.fromJson(str, userListType);
		for (Station station : stationListJSON) {
			if (!stationRepository.existsById(station.getName())) {
				stationRepository.save(station);
			}
		}
	}
```

### Processing csv files
The OpenCSV library is used for processing. We read the file line by line, dividing it into attributes for the Station model, check in the name field whether there is such an entry in the database, if not, then write it to the database. Processing function:

```java
public void parseFromCSV(MultipartFile file) throws IOException {

		CSVReader reader = new CSVReader(new FileReader(convertMultiPartToFile(file)), '|', '"', 1);
		String[] nextLine;
		while ((nextLine = reader.readNext()) != null) {
			if (!stationRepository.existsById(nextLine[3])) {
				Station station = new Station();
				station.setAddress(nextLine[0]);
				station.setLatitude(nextLine[1]);
				station.setLongtitude(nextLine[2]);
				station.setName(nextLine[3]);
				station.setCountry(nextLine[4]);
				station.setPhone(nextLine[5]);
				station.setRegion(nextLine[6]);
				stationRepository.save(station);
			}
		}

	}
```

### Processing xml files
The StAX library is used for processing. Reading from the file occurs sequentially, we go through all the tags and look for the data needed for our data model, form the entity, check for duplication using the name field of the database, if not, then write it to the database. Processing function:

```java
public void parseFromXML(MultipartFile file) throws IOException, XMLStreamException {
		XMLInputFactory xmlInputFactory = XMLInputFactory.newInstance();
		XMLEventReader reader = xmlInputFactory.createXMLEventReader(new FileInputStream(convertMultiPartToFile(file)));
		Station station = new Station();
		while (reader.hasNext()) {
			XMLEvent nextEvent = reader.nextEvent();
			if (nextEvent.isStartElement()) {
				StartElement startElement = nextEvent.asStartElement();
				switch (startElement.getName().getLocalPart()) {
					case "address":
						station = new Station();
						nextEvent = reader.nextEvent();
						if (!nextEvent.isCharacters()) {
							station.setAddress("-");
						} else {
							station.setAddress(nextEvent.asCharacters().getData());
						}
						break;
					case "latitude":
						nextEvent = reader.nextEvent();
						if (!nextEvent.isCharacters()) {
							station.setLatitude("-");
						} else {
							station.setLatitude(nextEvent.asCharacters().getData());
						}

						break;
					case "longtitude":
						nextEvent = reader.nextEvent();
						if (!nextEvent.isCharacters()) {
							station.setLongtitude("-");
						} else {
							station.setLongtitude(nextEvent.asCharacters().getData());
						}
						break;
					case "name":
						nextEvent = reader.nextEvent();
						station.setName(nextEvent.asCharacters().getData());
						break;
					case "country":
						nextEvent = reader.nextEvent();
						if (!nextEvent.isCharacters()) {
							station.setCountry("-");
						} else {
							station.setCountry(nextEvent.asCharacters().getData());
						}
						break;
					case "phone":
						nextEvent = reader.nextEvent();
						if (!nextEvent.isCharacters()) {
							station.setPhone("-");
						} else {
							station.setPhone(nextEvent.asCharacters().getData());
						}
						break;
					case "region":
						nextEvent = reader.nextEvent();
						if (!nextEvent.isCharacters()) {
							station.setRegion("-");
						} else {
							station.setRegion(nextEvent.asCharacters().getData());
						}
						if (!stationRepository.existsById(station.getName())) {
							stationRepository.save(station);
						}
						break;
				
				}
			}
		}
	}
```

There are test files in the root to check operation.