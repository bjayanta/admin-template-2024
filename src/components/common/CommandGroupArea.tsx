import {
	CommandGroup,
	CommandItem,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command"
import React from 'react'


export default function CommandGroupArea({ command, isLast } : { command: any, isLast: boolean }) {
    return (
        <>
            <CommandGroup heading={command.group}>
                {command.items.map((item: any, index: number) => (
                    <CommandItem 
                        key={index}
                        value={item.name}
                        onSelect={(value) => console.log(value)}
                    >
                        {item.icon}
                        <span>{item.name}</span>

                        {item?.shortcut && <CommandShortcut>{item.shortcut}</CommandShortcut>}
                    </CommandItem>
                ))}
            </CommandGroup>

            {!isLast ? <CommandSeparator /> : ''}
        </>
    )
}
