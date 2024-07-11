import { LayoutDashboard, Folders, CreditCard, Settings, User, Newspaper } from 'lucide-react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Command className="bg-secondary rounded-none">
      <CommandInput placeholder="Type a search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions" className="cursor-pointer">
          <CommandItem>
            <LayoutDashboard className='mr-2 h-4 w-4'></LayoutDashboard>
            <Link href='/'>Dashboard</Link>
          </CommandItem>
          <CommandItem>
          <Newspaper className='mr-2 h-4 w-4'></Newspaper>
          <Link href='/posts'>Posts</Link>
          </CommandItem>
          <CommandItem>
          <Folders className='mr-2 h-4 w-4'></Folders>
          <Link href='/'>Categories</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className='mr-2 h-4 w-4'/>
            <span>Profile</span>
            <CommandShortcut>^Y</CommandShortcut>
          </CommandItem>
          <CommandItem>
          <CreditCard className='mr-2 h-4 w-4'/>
            <span>Billing</span>
            <CommandShortcut>^B</CommandShortcut>
          </CommandItem>
          <CommandItem>
          <User className='mr-2 h-4 w-4'/>
            <span>Settings</span>
            <CommandShortcut>^S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
