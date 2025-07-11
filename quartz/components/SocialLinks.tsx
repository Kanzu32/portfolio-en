import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Links: QuartzComponent = ({ }: QuartzComponentProps) => {
    return (
      <div class="social-links">
        <ul>
            <li>
              <a class="external" href="https://kanzu32.github.io/portfolio-ru/" target="_blank">🔠 Русская версия</a>
            </li>

            <br/>

            <li>
              <a class="external" href="https://github.com/Kanzu32" target="_blank">🛠️ GitHub</a>
            </li>
            <li>
              <a class="external" href="https://kanzu32.itch.io/" target="_blank">🕹️ Itch.io</a>
            </li>
            <li>
              <a class="external" href="https://t.me/Kanzu32" target="_blank">📟 Telegram</a>
            </li>
        </ul>
      </div>
    )
  }

  return Links
}) satisfies QuartzComponentConstructor

