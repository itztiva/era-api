# Era Launcher API

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

To use this API:

Download Fiddler Classic [Click Here](https://www.telerik.com/download/fiddler)

When your download is complete go to Tools -> Options -> HTTPS and enable Capture HTTPS Connects and Decrypt HTTPS Traffic from all processes

Now you can close out of the Options Menu and go to FiddlerScript

CTRL - A and delete everything in the FiddlerScript Menu and Insert this:

```bash
import System;
import System.Web;
import System.Windows.Forms;
import Fiddler;

class Handlers
{
    static function OnBeforeRequest(oSession: Session) {
        if (oSession.hostname.Contains("erafn.app")) {
            if (oSession.HTTPMethodIs("CONNECT")) {
                oSession["x-replywithtunnel"] = "EraTunnel";
                return;
            }
                oSession.fullUrl = "http://127.0.0.1:3000" + oSession.PathAndQuery;

        }
    }
}
```

This project was created using `bun init` in bun v1.1.12. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
