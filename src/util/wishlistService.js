
const API_BASE = window._env_.APP_BASE_URL + window._env_.APP_API_VERSION;

export const wishlistService = {
  getWishlist: async (token) => {
    const response = await fetch(`${API_BASE}auth/customer/wishlist`, {
      headers: {
        'store': 'DEFAULT',
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      const error = await response.text();
      console.error('Wishlist fetch error:', error);
      throw new Error('Failed to fetch wishlist');
    }
    return response.json();
  },

  addToWishlist: async (productId, token) => {
    const response = await fetch(`${API_BASE}auth/customer/wishlist/product/${productId}`, {
      method: 'POST',
      headers: {
        'store': 'DEFAULT',
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      const error = await response.text();
      console.error('Add to wishlist error:', response.status, error);
      throw new Error('Failed to add to wishlist');
    }
    return response.json();
  },

  removeFromWishlist: async (productId, token) => {
    const response = await fetch(`${API_BASE}auth/customer/wishlist/product/${productId}`, {
      method: 'DELETE',
      headers: {
        'store': 'DEFAULT',
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Failed to remove from wishlist');
  },

  isInWishlist: async (productId, token) => {
    const response = await fetch(`${API_BASE}auth/customer/wishlist/product/${productId}/check`, {
      headers: {
        'store': 'DEFAULT',
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Failed to check wishlist');
    return response.json();
  }
};
