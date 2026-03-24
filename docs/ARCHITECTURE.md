# Shopizer Customer Shop - Architecture

---

## Application Structure

```
src/
├── index.js              # Entry point
├── App.js                # Root component
├── pages/                # Page components
├── components/           # Reusable components
├── wrappers/             # Section wrappers
├── layouts/              # Page layouts
├── redux/                # State management
│   ├── actions/
│   └── reducers/
├── helpers/              # Utility functions
├── util/                 # Constants & services
├── assets/               # Static assets
├── data/                 # Static data
└── translations/         # i18n files
```

---

## Redux State Structure

```
Store
├── productData          # Product catalog
├── cartData             # Shopping cart
├── userData             # User session
├── storeData            # Store configuration
├── contentData          # CMS content
└── loaderData           # Loading states
```

---

## Component Architecture

### Pages (Route Components)
```
pages/
├── home/                # Homepage
├── category/            # Category listing
├── product-details/     # Product detail page
├── search-product/      # Search results
├── content/             # CMS pages
└── other/
    ├── Cart.js
    ├── Checkout.js
    ├── LoginRegister.js
    ├── MyAccount.js
    ├── OrderConfirm.js
    └── Contact.js
```

### Reusable Components
```
components/
├── header/              # Header components
├── footer/              # Footer components
├── product/             # Product components
│   ├── ProductGridSingle.js
│   ├── ProductModal.js
│   └── ProductDescriptionInfo.js
├── hero-slider/         # Homepage slider
└── newsletter/          # Newsletter signup
```

### Wrappers (Section Containers)
```
wrappers/
├── header/              # Header wrapper
├── footer/              # Footer wrapper
├── product/             # Product sections
├── hero-slider/         # Hero slider wrapper
└── breadcrumb/          # Breadcrumb wrapper
```

---

## Routing Structure

```
/ → Home
/category/:code → Category page
/product/:id → Product details
/search → Search results
/content/:code → CMS page
/cart → Shopping cart
/checkout → Checkout
/login → Login/Register
/my-account → Customer account
/order-confirm → Order confirmation
/contact → Contact page
```

---

## Redux Flow

### Actions → Reducers → Store

```
User Action
    ↓
Action Creator (actions/)
    ↓
Dispatch Action
    ↓
Reducer (reducers/)
    ↓
Update Store
    ↓
Component Re-renders
```

### Example: Add to Cart

```javascript
// Action
export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (item, quantity) => {
  return dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: { item, quantity }
    });
  };
};

// Reducer
case ADD_TO_CART:
  const cartItem = state.find(
    item => item.id === action.payload.item.id
  );
  if (cartItem) {
    return state.map(item =>
      item.id === cartItem.id
        ? { ...item, quantity: item.quantity + action.payload.quantity }
        : item
    );
  } else {
    return [...state, { ...action.payload.item, quantity: action.payload.quantity }];
  }
```

---

## API Integration

### Service Layer

```javascript
// util/webService.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

export const getProducts = (params) => {
  return axios.get(`${API_BASE_URL}/api/v1/products`, { params });
};

export const getProduct = (id) => {
  return axios.get(`${API_BASE_URL}/api/v1/products/${id}`);
};

export const createOrder = (orderData) => {
  return axios.post(`${API_BASE_URL}/api/v1/orders`, orderData);
};
```

---

## State Persistence

### LocalStorage Integration

```javascript
// Redux store with persistence
import { save, load } from "redux-localstorage-simple";

const store = createStore(
  rootReducer,
  load(), // Load from localStorage
  applyMiddleware(
    thunk,
    save() // Save to localStorage
  )
);
```

### Persisted State
- Shopping cart
- User session
- Language preference

---

## Authentication Flow

```
1. User enters credentials
2. POST /api/v1/auth/login
3. Receive JWT token
4. Store token in cookie/localStorage
5. Add token to axios headers
6. Protected routes check token
7. Redirect to login if expired
```

---

## Shopping Cart Flow

```
Browse Products
    ↓
Add to Cart (Redux action)
    ↓
Cart stored in Redux + localStorage
    ↓
View Cart page
    ↓
Update quantities / Remove items
    ↓
Proceed to Checkout
    ↓
Enter shipping address
    ↓
Select shipping method
    ↓
Enter payment details
    ↓
Place Order (API call)
    ↓
Order Confirmation
```

---

## Checkout Process

```javascript
// Checkout steps
1. Cart Review
2. Customer Information
   - Login or Guest checkout
3. Shipping Address
4. Shipping Method
5. Payment Method
6. Order Review
7. Place Order
8. Order Confirmation
```

---

## Product Display

### Product Grid
```
ProductGrid (wrapper)
  └── ProductGridSingle (component)
      ├── Product Image
      ├── Product Name
      ├── Product Price
      ├── Add to Cart button
      └── Quick View button
```

### Product Details
```
ProductDetail (page)
  ├── ProductImageGallery
  ├── ProductDescriptionInfo
  │   ├── Name, SKU, Price
  │   ├── Options (size, color)
  │   ├── Quantity selector
  │   └── Add to Cart
  └── ProductDescriptionTab
      ├── Description
      ├── Additional Info
      └── Reviews
```

---

## Responsive Design

### Breakpoints
```scss
// Mobile
@media (max-width: 767px) { }

// Tablet
@media (min-width: 768px) and (max-width: 991px) { }

// Desktop
@media (min-width: 992px) { }
```

---

## Internationalization

```javascript
// translations/english.json
{
  "products": "Products",
  "add_to_cart": "Add to Cart",
  "checkout": "Checkout"
}

// translations/french.json
{
  "products": "Produits",
  "add_to_cart": "Ajouter au panier",
  "checkout": "Commander"
}

// Usage in component
import { multilanguage } from "redux-multilanguage";

const ProductComponent = ({ strings }) => (
  <button>{strings.add_to_cart}</button>
);

export default multilanguage(ProductComponent);
```

---

## SEO Optimization

```javascript
import MetaTags from 'react-meta-tags';

<MetaTags>
  <title>Product Name - Store Name</title>
  <meta name="description" content="Product description" />
  <meta property="og:title" content="Product Name" />
  <meta property="og:image" content="product-image.jpg" />
</MetaTags>
```

---

## Payment Integration

### Stripe Checkout

```javascript
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_...');

<Elements stripe={stripePromise}>
  <CheckoutForm />
</Elements>
```

---

## Build & Deployment

### Development
```bash
npm install
npm start
# Access: http://localhost:3000
```

### Production Build
```bash
npm run build
# Output: build/
```

### Docker
```bash
docker build -t shopizer-shop .
docker run -p 80:80 shopizer-shop
```

---

## Environment Variables

```bash
# .env
REACT_APP_BASE_URL=http://localhost:8080
REACT_APP_MERCHANT=DEFAULT
REACT_APP_STRIPE_KEY=pk_test_...
```

---

## Performance Optimization

- **Code Splitting** - React.lazy() for routes
- **Image Optimization** - Lazy loading images
- **Memoization** - React.memo for components
- **Redux Selectors** - Reselect for derived state
- **Bundle Size** - Tree shaking unused code
