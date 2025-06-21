import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

/**
 * Mobile-only floating CTA.
 * Appears bottom-right of the viewport on screens < lg.
 */
export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <Link href="/quote">
        <Button size="lg" className="bg-[#f5da00] hover:bg-[#e6c400] text-[#1e3f97] rounded-full shadow-2xl px-6 py-4">
          <Phone className="w-6 h-6 mr-2" />
          Quote
        </Button>
      </Link>
    </div>
  )
}
