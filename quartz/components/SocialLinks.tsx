import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Links: QuartzComponent = ({ }: QuartzComponentProps) => {
    return (
      <div class="social-links">
        <ul>
            <li>
              <a class="external" href="https://kanzu32.github.io/portfolio-ru/">🔠 Русская версия</a>
            </li>

            <br/>

            <li>
              <a class="external" href="https://github.com/Kanzu32">🛠️ GitHub</a>
            </li>
            <li>
              <a class="external" href="https://kanzu32.itch.io/">🕹️ Itch.io</a>
            </li>
            <li>
              <a class="external" href="https://t.me/Kanzu32">📟 Telegram</a>
            </li>
        </ul>
      </div>
    )
  }

  return Links
}) satisfies QuartzComponentConstructor

