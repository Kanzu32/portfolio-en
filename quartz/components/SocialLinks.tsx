import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Links: QuartzComponent = ({ }: QuartzComponentProps) => {
    return (
      <div class="social-links">
        <ul>
            <li>
              <a href="https://github.com/Kanzu32">🛠️ GitHub</a>
            </li>
            <li>
              <a href="https://kanzu32.itch.io/">🕹️ Itch.io</a>
            </li>
            <li>
              <a href="https://t.me/Kanzu32">📟 Telegram</a>
            </li>
        </ul>
      </div>
    )
  }

  return Links
}) satisfies QuartzComponentConstructor

