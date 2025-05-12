/**
 * Utility for generating a QR code URL for the current menu
 */
export const generateMenuQRLink = () => {
  // Get the current base URL
  const baseUrl = window.location.origin;
  // Create the full URL to our menu
  const menuUrl = `${baseUrl}/menu`;
  return menuUrl;
}; 