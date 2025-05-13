/**
 * Utility for generating a QR code URL for the current menu
 */
export const generateMenuQRLink = () => {
  // Get the current base URL
  const baseUrl = window.location.origin;
  // Create the full URL to our menu (root path since menu is on homepage)
  return baseUrl;
};

export const QR_CODE_OPTIONS = {
  errorCorrectionLevel: 'H',
  margin: 1,
  scale: 4,
  width: 240,
  color: {
    dark: '#000000',
    light: '#ffffff',
  },
}; 