"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList
} from "@/components/ui/command"
import CommandGroupArea from "@/components/common/CommandGroupArea"

export function CommandDialogBar() {
    const [open, setOpen] = React.useState(false)
    const commands = [
        {
            group: "Suggestions",
            items: [
                {name: "Calendar", icon: <Calendar className="mr-2 h-4 w-4" />},
                {name: "Search Emoji", icon: <Smile className="mr-2 h-4 w-4" />},
                {name: "Calculator", icon: <Calculator className="mr-2 h-4 w-4" />}
            ]
        },
        {
            group: "Settings",
            items: [
                {name: "Profile", icon: <User className="mr-2 h-4 w-4" />, shortcut: "⌘P"},
                {name: "Billing", icon: <CreditCard className="mr-2 h-4 w-4" />, shortcut: "⌘B"},
                {name: "Settings", icon: <Settings className="mr-2 h-4 w-4" />, shortcut: "⌘S"}
            ]
        }
    ]

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)

        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />

            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                {commands.map((command: any, key: number) => (
                    <CommandGroupArea command={command} isLast={commands.length === key + 1} key={key} />
                ))}
            </CommandList>
        </CommandDialog>
    )
}
