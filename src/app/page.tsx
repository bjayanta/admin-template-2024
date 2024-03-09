import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Menu {
  id: number,
  name: string,
  time: string,
  image: string,
  description: string,
  isDefault: boolean
}

async function getMenus(): Promise<Menu[]> {
  const result = await fetch('http://localhost:4000/menu')

  // Delay response
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return result.json()
}

export default async function Home() {
  const menus = await getMenus()

  return (
    <main className='container py-24'>
      <h2 className="text-5xl mb-16">Card design</h2>

      <div className="grid grid-cols-3 gap-8">
        {menus.map(menu => (
          <Card key={menu.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={`/images/${menu.image}`} alt="Menu image" />
                <AvatarFallback>{menu.name.slice(0, 2)}</AvatarFallback>
              </Avatar>

              <div>
                <CardTitle>{menu.name}</CardTitle>
                <CardDescription>{menu.time}</CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <p>{menu.description}</p>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button>View menu</Button>
              {menu.isDefault && <Badge variant="secondary">Default</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>

    </main>
  );
}
