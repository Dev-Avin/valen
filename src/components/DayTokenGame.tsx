import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { DayTheme } from '../types/valentine'

type DayTokenGameProps = {
  theme: DayTheme
  tokenImage: string   // /tokens/RoseDay.jpg
  pageImage: string    // /pages/RoseDayPage.jpg
}

export default function DayTokenGame({
  theme,
  tokenImage,
  pageImage,
}: DayTokenGameProps) {
  const [clicks, setClicks] = useState(0)
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 50 })

  const randomizePosition = () => {
    setPosition({
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    })
  }

  useEffect(() => {
    randomizePosition()
  }, [])

  const handleClick = () => {
    const next = clicks + 1
    setClicks(next)

    if (next >= 3) {
      setOpen(true)
    } else {
      randomizePosition()
    }
  }

  return (
    <>
      {clicks < 3 && (
        <img
          src={tokenImage}
          alt={`${theme.name} token`}
          onClick={handleClick}
          className={`fixed z-50 cursor-pointer transition-transform duration-300 hover:scale-110 ${theme.visuals.animation}`}
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            width: '90px',
            opacity: theme.visuals.mistOpacity,
            filter: `blur(1px) drop-shadow(${theme.visuals.glow})`,
          }}
        />
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {theme.emoji} Happy {theme.name}
            </DialogTitle>
          </DialogHeader>

          <img
            src={tokenImage}
            alt={`${theme.name} full token`}
            className="mx-auto my-4 rounded-lg shadow-lg"
          />

          <a href={pageImage} download>
            <Button className="w-full">
              Download Today’s Page 💌
            </Button>
          </a>
        </DialogContent>
      </Dialog>
    </>
  )
}