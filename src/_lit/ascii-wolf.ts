import { customElement, html, RootLitElement } from './lit'
import { anim } from './anim.js'

@customElement('ascii-wolf')
export class AsciiWolf extends RootLitElement {

  render() {
    return html`<div class="parallax-group">
        <pre class="parallax-layer--back wolf-text" 
        anim-d="r_span(5,50,'wolf-text-line');mech_space('wolf-text-line')">
                                                                                                     ╕═ ▐▄▄▄▄▄▄
                                                                                             ▄▄▄▄█████▀▀▀▀▓█ ▐█
                                                                                        ▄▄▄█▓████▄▄▄▄▄█▄▄██▓█▓  ▄▄████▐███─█▄▄
                                                                   ▄█▌▄▄▄▄▄▄▄▄█████▒████████████─▓▓▓▓▓▓█───   ╒█──╙█═─ ┌▄█▓▓▓█
                                                                ▐███████▌▀▐███████▀└└└└▀▀▀▐██████▓█████ ▐████████▄▄   ▄████▌
                                                         ▄▄▄ ▄▄███▀    ▄▄─▐███████████▄█████▌▀▀▀▀╙▀▀▀██▄██████▀▀█▄▄███▓██▓▀└
                                               ▄─    ╓▄██████▀▀▀▀████████████████████▀█╓╓╓  ╓   ▄▄▄████████▄▄██████▀▀█▀▀▓▓─
                                               ███▄▄████▄▄▄▄▄▄▄▄▐███████████████████▌╢╜╨╨╜▄▄▄█████████████████▀──╘▓▄██▄╓▀▓
                                               ██████▌▐███████████████████████████▒▒▓▓─▌ ▐████████████└██████▌   ██▌▓██▓▐██
                                               █████▄████████████████████████████▄╢▒▓▒ ███████████▀▀║▒█▐██     ▄█▓▓▓▓████████▄
                                              ███████▀▀▀▓▓▓▓       ███████████████████▄██████████ ─▐███████ ▄██▓███▒▀▀    ▀████▓██▄▄
                                            ▐███████████████████████▄▐█▀▀█████████████████████▌▀▒ ▐███▄█████▒▒████▌  ╟██▌   ─  ▀▀███████▄
                                            ▐████████████████████████████▒▒██▌███████████████████████▓███┘└▄ ─███▌▄╓╓▄└└└═   ╓╓╓███████▓▓█
                                           ╔████▀▀▀▀▀▀▀▀█████████████▌▀▀▀███▄▄▀▀▀███████████████████▀╙▀▀▀ ▄▓▄▄████████▄▄▄╥ ▄█████████████▀
                                          ▄██████▄▄▄▄╔▄██████▀▀▀█▀▀███████████████████████████▌ ▄▄▄▄   ▄▄▄█▓███████▀██▄▄██▄███████████████▄▄▄
                                      ╓▄▄█████████▀ ██████▄▄██  ▐▀ ██████████████████████████████████▄████▀██████████████████████████████████▀ ▄
                                █████████████████▌▄███████████    ▄███████████████████████████████████▓██▓▄████████████████████████████▓██▓█▌  ██▌
                          ┌▄▄▄█████████▄▄▄▄█████████▓███ ╙███   ╢ ████████████████████████████████▓▓▓▓████████████████─▒▀████████████████▓██▌ ▀▐█▌
               ▀▄▄▄▄█████████████████████▀███▄███████▀▀▀████▄█▄▄████▀▀▀▀▀▀  ████████████████▀███████████▌▀████████████└▀  ████████████████████
          ▄▄████████▀▒▄███████████████████─▐█████████████▄▄▄▄▄▄▄▄▄█▀▀▐  █████████████████▌▀▀▒███████████▌▒▒▀██████▌▒▒▒▒ ▐█████████████████▓███
         ▐██████████▄██████████████████▌███▌─█▀────────────└███████▄  ▐█████████████████▐█████████████▀██▒ ███████████▄┌▒─█████████████████▓▌─
         └█████████████████████▀████▀███████████████████ █████▀▀▀█████████████████████████████████████╔█▌  ███████████████████████████████▀ ─
           ▀▐████████████▀▄▄███▄█████████████████████████████████▄██████████████████████████████████▒▀ ██▄▄▀██████████████████████████████
             ▐███████████████████████████████████████████████████████████████████████▀▀████████████▌▒██████▄██████▀█▀▀█████████▓██████████
              ╘██████████████████████████▀██▀▀█▀████████████████████████████████████▌  ▄███████████▀╨█████████████▄▒▒▄█████████▓▓██▀███████▌
               ▀███████████████████████▌▌ ██  ██████████ ██████████████████████████─▐███████████▀█████████████████▌▒▒██████████▓██▓░████████▌
                   ▀▀███▌▀▀▀▀   ▄▄▄▄██ ▐███████        ▀▀█████▄▄▄▀▀▀█▌  ╙▀▐███████▄─ ▐█████████████████████▀████████▒ ████████████████████████
                      └██▄▄▄▄▄▄█ █  ▄██▄▄█   ▀─           ▐█▄▀████▄▄─┌▄▄ ▄▄▄▄███████████████████████████████▒████████║█████████████████▌▓███▌▓█
                       ─▀▀█▄▄▐██▄─  █▀▀▀▀═                 ▐████████████████████████████████████ █████████▀███  ██████ █████████████▓████   ─▀██▌
                          └└ ███▌  ┌▄█▌                     ▐█┘█████████████████████████▐█└└└▐████████████╖▄███┌██████┌██████████████████▄    └└
                                   ▀▀██                     ▐█ ██████████████████████▀▀▀    ▄▄▌  █████████▒██████████▌ ▐█████████████████╙
                                                         ▄▄▄▄█▄████████████████████▄▄▄  ▄▄▄▄████████▀▀██▀▀╙██████╖╓╟▓ ▄╙▀███████████████▀
                                                  ▄▄▄█████▀▀▀███████▌▐█████████████████████████████▀  ▄└╙ ███████▒╙▓▓─█▄▄███████████████▄
                                          ██▌ ┌┌█████████   ▄██████▄└▐██████████████████████████└└─ ─█████████████░▓▒ ███████████████████
                                          █▌ ▀███▌█▓██▌  ╒▄████▌▐█████████████████████████████▌╒██████████████████▌╢▒▒████████████▌▀███▌▓█
                                        ▐██████▓▓▓██    ███████▀▀████████████████████████████████████████████▌▒▀█▌▒   ██████████████  ▀─▀─
                                       ▐███ ▀▀█████  ▐███████▀▌███████████████████████╙████████████████████║╫▓▄ ███████████████ ╚███
                                      ╟██▓█▌┌ ──██▄▄███▒██▌┌▄████████▌██████████████▌▌█▌─▐████████████└────▄ ▐███████████████▌█─  ──
                                     █████████████▒▒▌████████████▀▀▀▀    └███▀▀▀▀▀▀▀──   ▐████████████▄   ███████████████████└
                                    ██████████▀██▄██████▄▄████▀─         ▄███▄███▄███▄   ▐████▀██▌▀██▀▀▄██████████████████▀
                                    ▀██▀▀ ▀███████████████▀▀▀▀           ▀▀▀▀█████████  ▄████▀┌▄      ▄████████████▀████▀
                                      ─    ████████████▀─                     ▀▀▀▀████▄█████████▄██▌▄▄███████████▌─╘▀▀──
                                            ▀▀███████▌▀                          ▐█████████████████████████████▀▀
                                               ╙▀▀                              ▐██████╙▀▀▀ ███████████████
                                                                                  ▀▀       ═███████████▀▀
                                                                                            ▀▀▀▐─ ████
                                                                                                  ▐█└└
      </pre>
      </div>`
  }

  updated() {
    anim.add(this as HTMLElement);
  }
}




