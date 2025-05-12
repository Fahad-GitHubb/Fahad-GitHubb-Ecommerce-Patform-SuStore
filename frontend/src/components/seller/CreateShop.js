"use client"

import { useState, useRef } from "react"
import HeaderBar from "../HeaderBar"
import {
  Upload,
  X,
  Plus,
  Trash2,
  Package,
  Calendar,
  HelpCircle,
  ImageIcon,
  DollarSign,
  Percent,
  ShoppingBag,
  Store,
} from "lucide-react"
import "../seller/create-shop-form.css"
import { createStore } from "../../store/shop"

// Sample categories
const shopCategories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Books & Stationery",
  "Sports & Outdoors",
  "Toys & Games",
  "Health & Wellness",
  "Automotive",
  "Jewelry & Accessories",
]

// Sample categories for products
const productCategories = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Books",
  "Toys & Games",
  "Sports & Outdoors",
  "Automotive",
  "Health & Wellness",
  "Jewelry",
]

export default function CreateShopForm() {
  // Step tracking
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5

  // Shop information
  const [shopData, setShopData] = useState({
    name: "",
    tagline: "",
    description: "",
    phone: "",
    email: "",
    address: "",
    haveAd: false,
    image: null,
  })

  // Shop image preview
  const [shopImagePreview, setShopImagePreview] = useState(null)

  // Products state
  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({
    id: Date.now(),
    name: "",
    description: "",
    price: "",
    images: [],
    quantity: "",
    category: "",
    bigDescription: "",
    details: [""],
    color: "",
    discountPercentage: "",
  })

  // Product image previews
  const [productImagePreviews, setProductImagePreviews] = useState([])

  // Bundles state
  const [bundles, setBundles] = useState([])
  const [currentBundle, setCurrentBundle] = useState({
    id: Date.now(),
    name: "",
    tagline: "",
    price: "",
    expiry: "",
    products: [],
  })

  // FAQs state
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }])

  // Refs for file inputs
  const shopImageInputRef = useRef(null)
  const productImageInputRef = useRef(null)

  const [logoPreview, setLogoPreview] = useState(null)
  const [bannerPreview, setBannerPreview] = useState(null)

  // Handle shop data changes
  const handleShopChange = (e) => {
    const { name, value, type, checked } = e.target
    setShopData({
      ...shopData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setShopData({
      ...shopData,
      [name]: value,
    })
  }

  const handleSelectChange = (name, value) => {
    setShopData({
      ...shopData,
      [name]: value,
    })
  }

  // Handle shop image upload
  const handleShopImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setShopData({
        ...shopData,
        image: file,
      })

      const reader = new FileReader()
      reader.onload = () => {
        setShopImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleLogoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setShopData({
        ...shopData,
        logo: file,
      })

      // Create preview URL
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBannerChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setShopData({
        ...shopData,
        banner: file,
      })

      // Create preview URL
      const reader = new FileReader()
      reader.onloadend = () => {
        setBannerPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle product changes
  const handleProductChange = (e) => {
    const { name, value } = e.target
    setCurrentProduct({
      ...currentProduct,
      [name]: value,
    })
  }

  // Handle product detail changes
  const handleDetailChange = (index, value) => {
    const updatedDetails = [...currentProduct.details]
    updatedDetails[index] = value
    setCurrentProduct({
      ...currentProduct,
      details: updatedDetails,
    })
  }

  // Add new detail field
  const addDetailField = () => {
    setCurrentProduct({
      ...currentProduct,
      details: [...currentProduct.details, ""],
    })
  }

  // Remove detail field
  const removeDetailField = (index) => {
    const updatedDetails = [...currentProduct.details]
    updatedDetails.splice(index, 1)
    setCurrentProduct({
      ...currentProduct,
      details: updatedDetails,
    })
  }

  // Handle product image upload
  const handleProductImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const newImages = [...currentProduct.images, ...files]

    setCurrentProduct({
      ...currentProduct,
      images: newImages,
    })

    // Create image previews
    const newPreviews = [...productImagePreviews]

    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = () => {
        newPreviews.push(reader.result)
        setProductImagePreviews(newPreviews)
      }
      reader.readAsDataURL(file)
    })
  }

  // Remove product image
  const removeProductImage = (index) => {
    const updatedImages = [...currentProduct.images]
    updatedImages.splice(index, 1)

    const updatedPreviews = [...productImagePreviews]
    updatedPreviews.splice(index, 1)

    setCurrentProduct({
      ...currentProduct,
      images: updatedImages,
    })
    setProductImagePreviews(updatedPreviews)
  }

  // Add product to list
  const addProduct = () => {
    // Validation
    if (!currentProduct.name || !currentProduct.price || currentProduct.images.length === 0) {
      alert("Please fill in all required product fields and add at least one image")
      return
    }

    const newProduct = {
      ...currentProduct,
      id: Date.now(),
    }

    setProducts([...products, newProduct])

    // Reset current product
    setCurrentProduct({
      id: Date.now(),
      name: "",
      description: "",
      price: "",
      images: [],
      quantity: "",
      category: "",
      bigDescription: "",
      details: [""],
      color: "",
      discountPercentage: "",
    })
    setProductImagePreviews([])
  }

  // Remove product
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))

    // Also remove from any bundles
    const updatedBundles = bundles.map((bundle) => {
      return {
        ...bundle,
        products: bundle.products.filter((p) => p.productId !== id),
      }
    })
    setBundles(updatedBundles)
  }

  // Handle bundle changes
  const handleBundleChange = (e) => {
    const { name, value } = e.target
    setCurrentBundle({
      ...currentBundle,
      [name]: value,
    })
  }

  // Add/update product in bundle
  const handleBundleProductChange = (productId, quantity) => {
    const existingProductIndex = currentBundle.products.findIndex((p) => p.productId === productId)

    if (existingProductIndex >= 0) {
      // Update existing product
      const updatedProducts = [...currentBundle.products]
      updatedProducts[existingProductIndex] = {
        ...updatedProducts[existingProductIndex],
        quantity: quantity,
      }

      setCurrentBundle({
        ...currentBundle,
        products: updatedProducts,
      })
    } else {
      // Add new product
      setCurrentBundle({
        ...currentBundle,
        products: [...currentBundle.products, { productId, quantity }],
      })
    }
  }

  // Remove product from bundle
  const removeBundleProduct = (productId) => {
    setCurrentBundle({
      ...currentBundle,
      products: currentBundle.products.filter((p) => p.productId !== productId),
    })
  }

  // Add bundle
  const addBundle = () => {
    // Validation
    if (!currentBundle.name || !currentBundle.price || currentBundle.products.length === 0) {
      alert("Please fill in all required bundle fields and add at least one product")
      return
    }

    const newBundle = {
      ...currentBundle,
      id: Date.now(),
    }

    setBundles([...bundles, newBundle])

    // Reset current bundle
    setCurrentBundle({
      id: Date.now(),
      name: "",
      tagline: "",
      price: "",
      expiry: "",
      products: [],
    })
  }

  // Remove bundle
  const removeBundle = (id) => {
    setBundles(bundles.filter((bundle) => bundle.id !== id))
  }

  // Handle FAQ changes
  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...faqs]
    updatedFaqs[index] = {
      ...updatedFaqs[index],
      [field]: value,
    }
    setFaqs(updatedFaqs)
  }

  // Add FAQ
  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }])
  }

  // Remove FAQ
  const removeFaq = (index) => {
    const updatedFaqs = [...faqs]
    updatedFaqs.splice(index, 1)
    setFaqs(updatedFaqs)
  }

  const removeLogo = () => {
    setShopData({
      ...shopData,
      logo: null,
    })
    setLogoPreview(null)
  }

  const removeBanner = () => {
    setShopData({
      ...shopData,
      banner: null,
    })
    setBannerPreview(null)
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation for final step
    if (faqs.some((faq) => !faq.question || !faq.answer)) {
      alert("Please fill in all FAQ fields or remove empty ones")
      return
    }

    // Combine all data
    const formData = {
      shop: shopData,
      products,
      bundles,
      faqs,
    }

    let sellerID = sessionStorage.getItem("user")
    sellerID = JSON.parse(sellerID)._id
    console.log("Seller ID:", sellerID)

    console.log("Form submitted:", formData)
    createStore(formData, sellerID)
    // Here you would typically send the data to your API
    alert("Shop created successfully!")
  }

  // Navigate to next step
  const nextStep = () => {
    // Validation for each step
    if (currentStep === 1) {
      if (!shopData.name || !shopData.tagline || !shopData.description || !shopData.email) {
        alert("Please fill in all required shop fields")
        return
      }
    } else if (currentStep === 2) {
      if (products.length === 0) {
        alert("Please add at least one product")
        return
      }
    } else if (currentStep === 3) {
      if (bundles.length === 0) {
        alert("Please add at least one bundle")
        return
      }
    }

    setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
  }

  // Navigate to previous step
  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  // Get product name by ID (for bundles)
  const getProductNameById = (id) => {
    const product = products.find((p) => p.id === id)
    return product ? product.name : "Unknown Product"
  }

  return (
    <>
      <HeaderBar 
          pageName="Create Shop"
          pagePath={['Home', 'Create Shop']}
      />
      <div className="create-shop-container">
      
        {/* Progress Indicator */}
        <div className="progress-container">
          <div className="progress-steps">
            {[...Array(totalSteps)].map((_, index) => (
              <div
                key={index}
                className={`progress-step ${currentStep >= index + 1 ? "active" : ""}`}
                onClick={() => {
                  // Only allow going back to previous steps
                  if (currentStep > index + 1) {
                    setCurrentStep(index + 1)
                  }
                }}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-label">
                  {index === 0 && "Shop Info"}
                  {index === 1 && "Products"}
                  {index === 2 && "Bundles"}
                  {index === 3 && "FAQs"}
                  {index === 4 && "Review"}
                </div>
              </div>
            ))}
          </div>
          <div className="progress-bar">
            <div
              className="progress-indicator"
              style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="create-shop-form">
          {/* Step 1: Shop Information */}
          {currentStep === 1 && (
            <div className="form-step">
              <div className="step-header">
                <h2>
                  <Store className="step-icon" /> Shop Information
                </h2>
                <p>Tell us about your shop</p>
              </div>

              <div className="form-section">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">
                      Shop Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={shopData.name}
                      onChange={handleShopChange}
                      placeholder="Enter your shop name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="tagline">
                      Tagline <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="tagline"
                      name="tagline"
                      value={shopData.tagline}
                      onChange={handleShopChange}
                      placeholder="A short catchy phrase for your shop"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="description">
                    Shop Description <span className="required">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={shopData.description}
                    onChange={handleShopChange}
                    placeholder="Describe what your shop offers"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <div className="form-section-title">Contact Information</div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={shopData.phone}
                      onChange={handleShopChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={shopData.email}
                      onChange={handleShopChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    value={shopData.address}
                    onChange={handleShopChange}
                    placeholder="Enter your shop address"
                    rows={3}
                  ></textarea>
                </div>

                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="haveAd"
                    name="haveAd"
                    checked={shopData.haveAd}
                    onChange={handleShopChange}
                  />
                  <label htmlFor="haveAd">I want to receive promotional ads and marketing</label>
                </div>

                <div className="form-section-title">Shop Image</div>

                <div className="form-group">
                  <label>
                    Shop Logo/Banner <span className="required">*</span>
                  </label>
                  <div className="image-upload-container">
                    {shopImagePreview ? (
                      <div className="image-preview-container">
                        <div className="image-preview">
                          <img src={shopImagePreview || "/placeholder.svg"} alt="Shop preview" />
                          <button
                            type="button"
                            className="remove-image"
                            onClick={() => {
                              setShopImagePreview(null)
                              setShopData({ ...shopData, image: null })
                            }}
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="upload-area" onClick={() => shopImageInputRef.current.click()}>
                        <Upload size={32} />
                        <p>Click to upload shop image</p>
                        <span>Recommended size: 1200 x 600 pixels</span>
                      </div>
                    )}
                    <input
                      type="file"
                      ref={shopImageInputRef}
                      onChange={handleShopImageUpload}
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Products */}
          {currentStep === 2 && (
            <div className="form-step">
              <div className="step-header">
                <h2>
                  <Package className="step-icon" /> Products
                </h2>
                <p>Add products to your shop</p>
              </div>

              <div className="form-section">
                <div className="product-form">
                  <div className="form-section-title">Add New Product</div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="productName">
                        Product Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="productName"
                        name="name"
                        value={currentProduct.name}
                        onChange={handleProductChange}
                        placeholder="Enter product name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="productCategory">Category</label>
                      <select
                        id="productCategory"
                        name="category"
                        value={currentProduct.category}
                        onChange={handleProductChange}
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="productPrice">
                        Price <span className="required">*</span>
                      </label>
                      <div className="input-with-icon">
                        <DollarSign size={16} className="input-icon" />
                        <input
                          type="number"
                          id="productPrice"
                          name="price"
                          value={currentProduct.price}
                          onChange={handleProductChange}
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="productQuantity">Quantity</label>
                      <input
                        type="number"
                        id="productQuantity"
                        name="quantity"
                        value={currentProduct.quantity}
                        onChange={handleProductChange}
                        placeholder="Available quantity"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="productColor">Color</label>
                      <input
                        type="text"
                        id="productColor"
                        name="color"
                        value={currentProduct.color}
                        onChange={handleProductChange}
                        placeholder="e.g. Red, Blue, Black"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="productDiscount">Discount Percentage</label>
                      <div className="input-with-icon">
                        <Percent size={16} className="input-icon" />
                        <input
                          type="number"
                          id="productDiscount"
                          name="discountPercentage"
                          value={currentProduct.discountPercentage}
                          onChange={handleProductChange}
                          placeholder="0"
                          min="0"
                          max="100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="productSmallDescription">Short Description</label>
                    <textarea
                      id="productSmallDescription"
                      name="description"
                      value={currentProduct.description}
                      onChange={handleProductChange}
                      placeholder="Brief product description"
                      rows={2}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="productBigDescription">Detailed Description</label>
                    <textarea
                      id="productBigDescription"
                      name="bigDescription"
                      value={currentProduct.bigDescription}
                      onChange={handleProductChange}
                      placeholder="Comprehensive product description"
                      rows={4}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label>
                      Product Images <span className="required">*</span>
                    </label>
                    <div className="image-upload-container">
                      <div className="image-previews">
                        {productImagePreviews.map((preview, index) => (
                          <div key={index} className="image-preview">
                            <img src={preview || "/placeholder.svg"} alt={`Product ${index + 1}`} />
                            <button type="button" className="remove-image" onClick={() => removeProductImage(index)}>
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                        <div className="upload-area small" onClick={() => productImageInputRef.current.click()}>
                          <ImageIcon size={24} />
                          <span>Add Image</span>
                        </div>
                      </div>
                      <input
                        type="file"
                        ref={productImageInputRef}
                        onChange={handleProductImageUpload}
                        accept="image/*"
                        multiple
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Product Details</label>
                    <div className="details-container">
                      {currentProduct.details.map((detail, index) => (
                        <div key={index} className="detail-row">
                          <input
                            type="text"
                            value={detail}
                            onChange={(e) => handleDetailChange(index, e.target.value)}
                            placeholder="e.g. Material: Cotton, Size: Large"
                          />
                          {currentProduct.details.length > 1 && (
                            <button type="button" className="remove-detail" onClick={() => removeDetailField(index)}>
                              <X size={16} />
                            </button>
                          )}
                        </div>
                      ))}
                      <button type="button" className="add-detail-btn" onClick={addDetailField}>
                        <Plus size={14} /> Add Another Detail
                      </button>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="add-product-btn" onClick={addProduct}>
                      <Plus size={16} /> Add Product
                    </button>
                  </div>
                </div>

                {products.length > 0 && (
                  <div className="products-list">
                    <div className="form-section-title">Added Products ({products.length})</div>

                    <div className="products-table">
                      <div className="products-header">
                        <div className="product-cell">Image</div>
                        <div className="product-cell">Name</div>
                        <div className="product-cell">Price</div>
                        <div className="product-cell">Category</div>
                        <div className="product-cell">Actions</div>
                      </div>

                      {products.map((product) => (
                        <div key={product.id} className="product-row">
                          <div className="product-cell">
                            {product.images.length > 0 && (
                              <div className="product-thumbnail">
                                <img
                                  src={URL.createObjectURL(product.images[0]) || "/placeholder.svg"}
                                  alt={product.name}
                                />
                              </div>
                            )}
                          </div>
                          <div className="product-cell">{product.name}</div>
                          <div className="product-cell">${Number.parseFloat(product.price).toFixed(2)}</div>
                          <div className="product-cell">{product.category || "—"}</div>
                          <div className="product-cell">
                            <button type="button" className="remove-btn" onClick={() => removeProduct(product.id)}>
                              <Trash2 size={16} /> Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Bundles */}
          {currentStep === 3 && (
            <div className="form-step">
              <div className="step-header">
                <h2>
                  <ShoppingBag className="step-icon" /> Bundles
                </h2>
                <p>Create product bundles with special pricing</p>
              </div>

              <div className="form-section">
                <div className="bundle-form">
                  <div className="form-section-title">Create New Bundle</div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="bundleName">
                        Bundle Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="bundleName"
                        name="name"
                        value={currentBundle.name}
                        onChange={handleBundleChange}
                        placeholder="Enter bundle name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="bundleTagline">Bundle Tagline</label>
                      <input
                        type="text"
                        id="bundleTagline"
                        name="tagline"
                        value={currentBundle.tagline}
                        onChange={handleBundleChange}
                        placeholder="A catchy tagline for your bundle"
                      />
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="bundlePrice">
                        Bundle Price <span className="required">*</span>
                      </label>
                      <div className="input-with-icon">
                        <DollarSign size={16} className="input-icon" />
                        <input
                          type="number"
                          id="bundlePrice"
                          name="price"
                          value={currentBundle.price}
                          onChange={handleBundleChange}
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="bundleExpiry">Expiry Date</label>
                      <div className="input-with-icon">
                        <Calendar size={16} className="input-icon" />
                        <input
                          type="date"
                          id="bundleExpiry"
                          name="expiry"
                          value={currentBundle.expiry}
                          onChange={handleBundleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>
                      Select Products for Bundle <span className="required">*</span>
                    </label>

                    {products.length === 0 ? (
                      <div className="empty-state">
                        <p>No products available. Please add products in the previous step.</p>
                      </div>
                    ) : (
                      <div className="bundle-products-selector">
                        {products.map((product) => {
                          const bundleProduct = currentBundle.products.find((p) => p.productId === product.id)
                          const isSelected = !!bundleProduct

                          return (
                            <div key={product.id} className={`bundle-product-item ${isSelected ? "selected" : ""}`}>
                              <div className="bundle-product-info">
                                {product.images.length > 0 && (
                                  <div className="bundle-product-image">
                                    <img
                                      src={URL.createObjectURL(product.images[0]) || "/placeholder.svg"}
                                      alt={product.name}
                                    />
                                  </div>
                                )}
                                <div className="bundle-product-details">
                                  <h4>{product.name}</h4>
                                  <p>${Number.parseFloat(product.price).toFixed(2)}</p>
                                </div>
                              </div>

                              <div className="bundle-product-actions">
                                {isSelected ? (
                                  <>
                                    <div className="quantity-selector">
                                      <button
                                        type="button"
                                        onClick={() => {
                                          const newQuantity = Math.max(1, Number.parseInt(bundleProduct.quantity) - 1)
                                          handleBundleProductChange(product.id, newQuantity)
                                        }}
                                      >
                                        -
                                      </button>
                                      <input
                                        type="number"
                                        min="1"
                                        value={bundleProduct.quantity}
                                        onChange={(e) => handleBundleProductChange(product.id, e.target.value)}
                                      />
                                      <button
                                        type="button"
                                        onClick={() => {
                                          const newQuantity = Number.parseInt(bundleProduct.quantity) + 1
                                          handleBundleProductChange(product.id, newQuantity)
                                        }}
                                      >
                                        +
                                      </button>
                                    </div>
                                    <button
                                      type="button"
                                      className="remove-bundle-product"
                                      onClick={() => removeBundleProduct(product.id)}
                                    >
                                      <X size={16} />
                                    </button>
                                  </>
                                ) : (
                                  <button
                                    type="button"
                                    className="add-to-bundle-btn"
                                    onClick={() => handleBundleProductChange(product.id, 1)}
                                  >
                                    <Plus size={14} /> Add
                                  </button>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>

                  {currentBundle.products.length > 0 && (
                    <div className="bundle-summary">
                      <div className="bundle-summary-title">Bundle Summary</div>
                      <div className="bundle-summary-products">
                        {currentBundle.products.map((bundleProduct) => {
                          const product = products.find((p) => p.id === bundleProduct.productId)
                          if (!product) return null

                          return (
                            <div key={bundleProduct.productId} className="bundle-summary-item">
                              <span>
                                {product.name} × {bundleProduct.quantity}
                              </span>
                              <span>
                                ${(Number.parseFloat(product.price) * Number.parseInt(bundleProduct.quantity)).toFixed(2)}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                      <div className="bundle-summary-total">
                        <span>Bundle Price:</span>
                        <span>${currentBundle.price ? Number.parseFloat(currentBundle.price).toFixed(2) : "0.00"}</span>
                      </div>

                      {/* Calculate savings */}
                      {currentBundle.price && (
                        <div className="bundle-savings">
                          {(() => {
                            const regularTotal = currentBundle.products.reduce((total, bundleProduct) => {
                              const product = products.find((p) => p.id === bundleProduct.productId)
                              if (!product) return total
                              return total + Number.parseFloat(product.price) * Number.parseInt(bundleProduct.quantity)
                            }, 0)

                            const savings = regularTotal - Number.parseFloat(currentBundle.price)
                            const savingsPercentage = (savings / regularTotal) * 100

                            if (savings > 0) {
                              return (
                                <div className="savings-info">
                                  <span>Customer Savings:</span>
                                  <span>
                                    ${savings.toFixed(2)} ({savingsPercentage.toFixed(0)}% off)
                                  </span>
                                </div>
                              )
                            }
                            return null
                          })()}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="form-actions">
                    <button type="button" className="add-bundle-btn" onClick={addBundle}>
                      <Plus size={16} /> Add Bundle
                    </button>
                  </div>
                </div>

                {bundles.length > 0 && (
                  <div className="bundles-list">
                    <div className="form-section-title">Added Bundles ({bundles.length})</div>

                    <div className="bundles-container">
                      {bundles.map((bundle) => (
                        <div key={bundle.id} className="bundle-card">
                          <div className="bundle-card-header">
                            <h3>{bundle.name}</h3>
                            <button type="button" className="remove-btn small" onClick={() => removeBundle(bundle.id)}>
                              <Trash2 size={14} />
                            </button>
                          </div>

                          {bundle.tagline && <p className="bundle-tagline">{bundle.tagline}</p>}

                          <div className="bundle-price">${Number.parseFloat(bundle.price).toFixed(2)}</div>

                          {bundle.expiry && (
                            <div className="bundle-expiry">
                              <Calendar size={14} />
                              <span>Expires: {new Date(bundle.expiry).toLocaleDateString()}</span>
                            </div>
                          )}

                          <div className="bundle-products">
                            <div className="bundle-products-title">Products:</div>
                            <ul>
                              {bundle.products.map((bundleProduct) => (
                                <li key={bundleProduct.productId}>
                                  {getProductNameById(bundleProduct.productId)} × {bundleProduct.quantity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 4: FAQs */}
          {currentStep === 4 && (
            <div className="form-step">
              <div className="step-header">
                <h2>
                  <HelpCircle className="step-icon" /> Frequently Asked Questions
                </h2>
                <p>Add FAQs to help your customers</p>
              </div>

              <div className="form-section">
                <div className="faqs-container">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <div className="faq-header">
                        <h3>FAQ #{index + 1}</h3>
                        {faqs.length > 1 && (
                          <button type="button" className="remove-btn small" onClick={() => removeFaq(index)}>
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor={`question-${index}`}>
                          Question <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id={`question-${index}`}
                          value={faq.question}
                          onChange={(e) => handleFaqChange(index, "question", e.target.value)}
                          placeholder="Enter a frequently asked question"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor={`answer-${index}`}>
                          Answer <span className="required">*</span>
                        </label>
                        <textarea
                          id={`answer-${index}`}
                          value={faq.answer}
                          onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
                          placeholder="Provide a helpful answer"
                          rows={3}
                        ></textarea>
                      </div>
                    </div>
                  ))}

                  <button type="button" className="add-faq-btn" onClick={addFaq}>
                    <Plus size={16} /> Add Another FAQ
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Review */}
          {currentStep === 5 && (
            <div className="form-step">
              <div className="step-header">
                <h2>
                  <Store className="step-icon" /> Review Your Shop
                </h2>
                <p>Review all information before submitting</p>
              </div>

              <div className="form-section">
                <div className="review-section">
                  <div className="review-section-header">
                    <h3>Shop Information</h3>
                    <button type="button" className="edit-section-btn" onClick={() => setCurrentStep(1)}>
                      Edit
                    </button>
                  </div>

                  <div className="review-content">
                    <div className="review-grid">
                      <div className="review-item">
                        <span className="review-label">Shop Name:</span>
                        <span className="review-value">{shopData.name}</span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">Tagline:</span>
                        <span className="review-value">{shopData.tagline}</span>
                      </div>

                      <div className="review-item full-width">
                        <span className="review-label">Description:</span>
                        <span className="review-value">{shopData.description}</span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">Email:</span>
                        <span className="review-value">{shopData.email}</span>
                      </div>

                      <div className="review-item">
                        <span className="review-label">Phone:</span>
                        <span className="review-value">{shopData.phone || "—"}</span>
                      </div>

                      {shopData.address && (
                        <div className="review-item full-width">
                          <span className="review-label">Address:</span>
                          <span className="review-value">{shopData.address}</span>
                        </div>
                      )}

                      {shopImagePreview && (
                        <div className="review-item full-width">
                          <span className="review-label">Shop Image:</span>
                          <div className="review-image">
                            <img src={shopImagePreview || "/placeholder.svg"} alt="Shop" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="review-section">
                  <div className="review-section-header">
                    <h3>Products ({products.length})</h3>
                    <button type="button" className="edit-section-btn" onClick={() => setCurrentStep(2)}>
                      Edit
                    </button>
                  </div>

                  <div className="review-content">
                    {products.length === 0 ? (
                      <div className="empty-state">
                        <p>No products added yet.</p>
                      </div>
                    ) : (
                      <div className="review-products">
                        {products.map((product) => (
                          <div key={product.id} className="review-product-card">
                            <div className="review-product-image">
                              {product.images.length > 0 && (
                                <img
                                  src={URL.createObjectURL(product.images[0]) || "/placeholder.svg"}
                                  alt={product.name}
                                />
                              )}
                            </div>
                            <div className="review-product-details">
                              <h4>{product.name}</h4>
                              <div className="review-product-price">
                                ${Number.parseFloat(product.price).toFixed(2)}
                                {/* {product.discountPercentage && (
                                  <span className="discount-badge">{product.discountPercentage}% off</span>
                                )} */}
                              </div>
                              {product.category && <p className="review-product-category">{product.category}</p>}
                              {product.description && (
                                <p className="review-product-description">{product.description}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="review-section">
                  <div className="review-section-header">
                    <h3>Bundles ({bundles.length})</h3>
                    <button type="button" className="edit-section-btn" onClick={() => setCurrentStep(3)}>
                      Edit
                    </button>
                  </div>

                  <div className="review-content">
                    {bundles.length === 0 ? (
                      <div className="empty-state">
                        <p>No bundles added yet.</p>
                      </div>
                    ) : (
                      <div className="review-bundles">
                        {bundles.map((bundle) => (
                          <div key={bundle.id} className="review-bundle-card">
                            <div className="review-bundle-header">
                              <h4>{bundle.name}</h4>
                              <div className="review-bundle-price">${Number.parseFloat(bundle.price).toFixed(2)}</div>
                            </div>

                            {bundle.tagline && <p className="review-bundle-tagline">{bundle.tagline}</p>}

                            {bundle.expiry && (
                              <div className="review-bundle-expiry">
                                <Calendar size={14} />
                                <span>Expires: {new Date(bundle.expiry).toLocaleDateString()}</span>
                              </div>
                            )}

                            <div className="review-bundle-products">
                              <span className="review-label">Products:</span>
                              <ul>
                                {bundle.products.map((bundleProduct) => (
                                  <li key={bundleProduct.productId}>
                                    {getProductNameById(bundleProduct.productId)} × {bundleProduct.quantity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="review-section">
                  <div className="review-section-header">
                    <h3>FAQs ({faqs.length})</h3>
                    <button type="button" className="edit-section-btn" onClick={() => setCurrentStep(4)}>
                      Edit
                    </button>
                  </div>

                  <div className="review-content">
                    {faqs.length === 0 ? (
                      <div className="empty-state">
                        <p>No FAQs added yet.</p>
                      </div>
                    ) : (
                      <div className="review-faqs">
                        {faqs.map((faq, index) => (
                          <div key={index} className="review-faq-item">
                            <div className="review-faq-question">
                              <span className="faq-number">Q{index + 1}:</span>
                              <span>{faq.question}</span>
                            </div>
                            <div className="review-faq-answer">
                              <span className="faq-number">A:</span>
                              <span>{faq.answer}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="terms-agreement">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">
                    I agree to the{" "}
                    <a href="#" target="_blank" rel="noreferrer">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" target="_blank" rel="noreferrer">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="form-navigation">
            {currentStep > 1 && (
              <button type="button" className="prev-btn" onClick={prevStep}>
                Previous
              </button>
            )}

            {currentStep < totalSteps ? (
              <button type="button" className="next-btn" onClick={nextStep}>
                Next
              </button>
            ) : (
              <button type="submit" className="submit-btn">
                Create Shop
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  )
}
