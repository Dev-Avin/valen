import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Download } from 'lucide-react'

type Props = {
  currentDay: string
}

const TOKEN_MAP: Record<string, string> = {
  rose: '/tokens/RoseDay.jpg',
  propose: '/tokens/ProposeDay.jpg',
  chocolate: '/tokens/ChocolateDay.jpg',
  teddy: '/tokens/TeddyDay.jpg',
  promise: '/tokens/Promiseday.jpg',
  hug: '/tokens/HugDay.jpg',
  kiss: '/tokens/Kissday.jpg',
  valentine: '/tokens/ValentinesDay.jpg',
}

const PAGE_MAP: Record<string, string> = {
  rose: '/pages/RoseDayPage.jpg',
  propose: '/pages/ProposeDayPage.jpg',
  chocolate: '/pages/ChocolateDayPage.jpg',
  teddy: '/pages/TeddyDayPage.jpg',
  promise: '/pages/PromiseDayPage.jpg',
  hug: '/pages/HugDayPage.jpg',
  kiss: '/pages/KissDayPage.jpg',
  valentine: '/pages/ValentinesDayPage.jpg',
}

export function DailyToken({ currentDay }: Props) {
  const [clicks, setClicks] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [pos, setPos] = useState({ top: '50%', left: '50%' })

  const moveSparkle = () => {
    setPos({
      top: `${Math.random() * 70 + 10}%`,
      left: `${Math.random() * 70 + 10}%`,
    })
  }

  useEffect(() => {
    moveSparkle()
    setClicks(0)
    setShowModal(false)
  }, [currentDay])

  const onClick = () => {
    const next = clicks + 1
    setClicks(next)
    moveSparkle()

    if (next === 1) toast('✨ 2 more clicks')
    if (next === 2) toast('💫 Almost magical…')
    if (next === 3) {
      toast.success('💖 Magic unlocked!')
      setShowModal(true)
    }
  }

  return (
    <>
      {/* INLINE CSS */}
      <style>{`
        .sparkle-wrapper {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 99999;
          cursor: pointer;
        }

        .sparkle-container {
          position: relative;
          width: 160px;
          height: 160px;
          transition: transform 0.3s ease;
        }

        .sparkle-container:hover {
          transform: scale(1.1);
        }

        .sparkle-glow {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(244,114,182,0.45);
          filter: blur(50px);
          animation: pulse 2.5s infinite;
        }

        .sparkle-svg {
          position: relative;
          filter: drop-shadow(0 0 40px rgba(255,182,193,1));
        }

        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15,15,20,0.65);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100000;
        }

        .modal-wrapper {
          width: 94%;
          max-width: 560px;
        }

        .modal-card {
          border-radius: 2.75rem;
          padding: 2.5rem;
          text-align: center;
          background: linear-gradient(
            180deg,
            rgba(255,235,240,0.97),
            rgba(255,215,225,0.97)
          );
          box-shadow: 0 40px 100px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.35);
          backdrop-filter: blur(20px);
        }

        .token-box {
          padding: 1.25rem;
          background: rgba(255,255,255,0.85);
          border-radius: 2.5rem;
          box-shadow: inset 0 0 26px rgba(0,0,0,0.12);
          margin-bottom: 2.75rem;
        }

        .token-image {
          width: 100%;
          max-height: 460px;
          object-fit: cover;
          border-radius: 2.25rem;
        }

        .download-container {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
        }

        .download-glass {
          padding: 6px;
          border-radius: 999px;
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(12px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }

        .download-button {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.95rem 2.25rem;
          border-radius: 999px;
          background: linear-gradient(
            to right,
            #fb7185,
            #ec4899,
            #f43f5e
          );
          color: white;
          font-weight: 600;
          font-size: 1.05rem;
          letter-spacing: 0.05em;
          text-decoration: none;
          box-shadow: 0 14px 30px rgba(244,114,182,0.45);
          transition: all 0.2s ease;
        }

        .download-button:hover {
          transform: scale(1.06);
          box-shadow: 0 18px 40px rgba(244,114,182,0.6);
        }

        .download-button:active {
          transform: scale(0.94);
        }
      `}</style>

      {/* ✨ MAGIC SPARKLE */}
      {clicks < 3 && (
        <div
          className="sparkle-wrapper"
          style={{ top: pos.top, left: pos.left }}
          onClick={onClick}
        >
          <div className="sparkle-container">
            <div className="sparkle-glow" />
            <div className="sparkle-svg">
              <svg width="160" height="160" viewBox="0 0 200 200">
                <defs>
                  <radialGradient id="roseGlow" r="50%">
                    <stop offset="0%" stopColor="#fff" />
                    <stop offset="40%" stopColor="#ff7aa2" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                  <filter id="softBlur">
                    <feGaussianBlur stdDeviation="4" />
                  </filter>
                </defs>

                <circle
                  cx="100"
                  cy="100"
                  r="56"
                  fill="url(#roseGlow)"
                  filter="url(#softBlur)"
                >
                  <animate
                    attributeName="r"
                    values="52;62;52"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>

                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="18s"
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    additive="sum"
                    type="scale"
                    values="0.97;1.06;0.97"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                  <path
                    d="
                      M100 30
                      C112 72, 135 92, 170 100
                      C135 108, 112 128, 100 170
                      C88 128, 65 108, 30 100
                      C65 92, 88 72, 100 30
                      Z
                    "
                    fill="#ff5c8a"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* 💖 MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="modal-card">
              <div className="token-box">
                <img
                  src={TOKEN_MAP[currentDay]}
                  alt="Daily Token"
                  className="token-image"
                />
              </div>

              <div className="download-container">
                <div className="download-glass">
                  <a
                    href={PAGE_MAP[currentDay]}
                    download
                    className="download-button"
                  >
                    <Download size={22} strokeWidth={2.5} />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}