import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function generateUserId() {
  return 'user_' + Math.random().toString(36).substr(2, 9)
}

export function calculateLevel(totalTests) {
  if (totalTests < 5) return { level: 1, title: 'Iniciante', progress: (totalTests / 5) * 100 }
  if (totalTests < 15) return { level: 2, title: 'Explorador', progress: ((totalTests - 5) / 10) * 100 }
  if (totalTests < 30) return { level: 3, title: 'Curioso', progress: ((totalTests - 15) / 15) * 100 }
  if (totalTests < 50) return { level: 4, title: 'Analista', progress: ((totalTests - 30) / 20) * 100 }
  if (totalTests < 75) return { level: 5, title: 'Especialista', progress: ((totalTests - 50) / 25) * 100 }
  if (totalTests < 100) return { level: 6, title: 'Mestre', progress: ((totalTests - 75) / 25) * 100 }
  return { level: 7, title: 'Lenda', progress: 100 }
}

export function getShareableText(testName, score, trait) {
  return `🎯 Descubra sobre você!\n\nEu fiz o teste "${testName}" e sou ${score}% ${trait}!\n\nFaça o teste e descubra mais sobre você: ${window.location.href}`
}
