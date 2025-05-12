import { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { generateMenuQRLink } from '../utils/qrCode';
import { ArrowLeftIcon, ArrowDownTrayIcon, ShareIcon, CameraIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const QRCodePage = () => {
  const [size, setSize] = useState<number>(240);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fgColor, setFgColor] = useState('#000000');
  const menuUrl = generateMenuQRLink();
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQRCode = () => {
    if (!qrRef.current) return;
    
    const svg = qrRef.current.querySelector('svg');
    if (!svg) return;
    
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = size;
      canvas.height = size;
      ctx?.drawImage(img, 0, 0);
      
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'digital-cafe-menu-qr.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <div className="h-full overflow-y-auto scrollbar-modern pb-12">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium mb-8">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Menu
          </Link>
          
          <motion.div 
            className="max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-card overflow-hidden">
              <div className="bg-primary-500 dark:bg-primary-600 p-6">
                <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Menu QR Code</h1>
                <p className="text-primary-100 text-lg">
                  Scan with your phone camera to view our digital menu
                </p>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <motion.div 
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div 
                      className="bg-white p-5 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-soft mb-4" 
                      ref={qrRef}
                      style={{ backgroundColor: bgColor }}
                    >
                      <QRCodeSVG 
                        value={menuUrl}
                        size={size}
                        bgColor={bgColor}
                        fgColor={fgColor}
                        level={"H"}
                        includeMargin={false}
                      />
                    </div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
                      <CameraIcon className="inline-block h-4 w-4 mb-1 mr-1" />
                      Scan with your camera
                    </div>
                  </motion.div>
                  
                  <div className="flex-1 space-y-5 w-full">
                    <div>
                      <label htmlFor="qr-size" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        QR Code Size: {size}px
                      </label>
                      <input
                        id="qr-size"
                        type="range"
                        min="150"
                        max="400"
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-200 rounded-full appearance-none cursor-pointer dark:bg-neutral-700 accent-primary-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                          Background
                        </label>
                        <input 
                          type="color"
                          value={bgColor}
                          onChange={(e) => setBgColor(e.target.value)}
                          className="h-10 w-full rounded-lg cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                          QR Color
                        </label>
                        <input 
                          type="color"
                          value={fgColor}
                          onChange={(e) => setFgColor(e.target.value)}
                          className="h-10 w-full rounded-lg cursor-pointer"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-3">
                      <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Menu URL
                      </div>
                      <div className="flex items-center">
                        <input
                          type="text"
                          readOnly
                          value={menuUrl}
                          className="flex-1 p-3 border border-neutral-200 dark:border-neutral-700 rounded-l-lg bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 font-mono text-sm"
                        />
                        <button className="p-3 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 border-l-0 rounded-r-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700">
                          <ShareIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <motion.button
                        onClick={downloadQRCode}
                        className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ArrowDownTrayIcon className="h-5 w-5" />
                        Download QR Code
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-card p-6">
              <h2 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-4">
                How to Use
              </h2>
              <ol className="space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold">1</span>
                  <span>Download the QR code or display it on a screen</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold">2</span>
                  <span>Print it and place it on tables or at your counter</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold">3</span>
                  <span>Customers can scan it with their phone camera to view the menu</span>
                </li>
              </ol>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}; 