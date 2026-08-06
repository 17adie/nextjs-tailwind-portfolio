import { useEffect, useState } from "react"
import Router from "next/router"

// True while the router is navigating to `href`, so the link the visitor actually
// clicked can show its own spinner. The top progress bar alone isn't enough here: the
// case-study links sit halfway down a grid of cards, and the bar is off-screen from
// wherever the eye is at the moment of the click.
//
// Pass null to opt out — cards without a case study still call this, since a hook can't
// be called conditionally.
export default function usePendingRoute(href) {
  const [pending, setPending] = useState(false)

  useEffect(() => {
    if (!href) return

    const start = (url) => {
      if (url === href) setPending(true)
    }
    // Clears on complete *and* on error: a cancelled navigation would otherwise leave
    // the link spinning forever.
    const stop = () => setPending(false)

    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", stop)
    Router.events.on("routeChangeError", stop)

    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", stop)
      Router.events.off("routeChangeError", stop)
    }
    // Router singleton rather than useRouter(): Next returns a new router object after
    // every navigation, which would re-run this effect and resubscribe all eight cards
    // on each route change for no reason. href is a stable string per card.
  }, [href])

  return pending
}
