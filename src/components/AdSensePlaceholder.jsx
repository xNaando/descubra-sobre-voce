export default function AdSensePlaceholder({ position = 'horizontal' }) {
  const isHorizontal = position === 'horizontal'
  
  return (
    <div className={`w-full ${isHorizontal ? 'h-24 md:h-32' : 'h-64 md:h-96'} bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600`}>
      <div className="text-center p-4">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          Espaço para Google AdSense
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
          {isHorizontal ? 'Banner horizontal (728x90)' : 'Banner vertical (300x600)'}
        </p>
      </div>
    </div>
  )
}
