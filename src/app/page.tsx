import { Button } from '@/src/components/ui/button'
import { TestComponent } from './features/test'

export default function Home() {
  return (
    <div>
      <Button size="sm">Click me</Button>
      <TestComponent></TestComponent>
      <p className="text-red-500 font-semibold">Antonio</p>
    </div>
  )
}
