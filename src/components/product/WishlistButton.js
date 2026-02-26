import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { wishlistService } from "../../util/wishlistService";
import { getLocalData } from "../../util/helper";

const WishlistButton = ({ productId }) => {
  const [inWishlist, setInWishlist] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  useEffect(() => {
    const token = getLocalData('token');
    if (!token) return;
    wishlistService.isInWishlist(productId, token)
      .then(setInWishlist)
      .catch(() => {});
  }, [productId]);

  const handleToggle = async (e) => {
    e.preventDefault();
    const token = getLocalData('token');
    if (!token) {
      addToast("Please login to use wishlist", { appearance: "warning" });
      return;
    }
    setLoading(true);
    try {
      if (inWishlist) {
        await wishlistService.removeFromWishlist(productId, token);
        setInWishlist(false);
        addToast("Removed from wishlist", { appearance: "success" });
      } else {
        await wishlistService.addToWishlist(productId, token);
        setInWishlist(true);
        addToast("Added to wishlist", { appearance: "success" });
      }
    } catch (error) {
      addToast("Failed to update wishlist", { appearance: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className={`wishlist-btn ${inWishlist ? 'active' : ''}`}
      title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
      style={{
        background: 'none',
        border: 'none',
        cursor: loading ? 'not-allowed' : 'pointer',
        fontSize: '18px',
        color: inWishlist ? '#ff0000' : '#333',
        padding: '5px'
      }}
    >
      <i className={inWishlist ? "fa fa-heart" : "fa fa-heart-o"}></i>
    </button>
  );
};

WishlistButton.propTypes = {
  productId: PropTypes.number.isRequired
};

export default WishlistButton;
