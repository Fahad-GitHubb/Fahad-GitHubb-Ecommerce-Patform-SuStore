"use client"

import { useState } from "react"
import HeaderBar from "../HeaderBar"
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

// Product categories
const productCategories = [
  "Smartphones",
  "Laptops",
  "Audio",
  "Cameras",
  "Wearables",
  "Home Appliances",
  "Gaming",
  "Accessories",
]

export default function CreateShopPage() {
  // Shop state
  const [shopData, setShopData] = useState({
    name: "",
    description: "",
    category: "",
    email: "",
    phone: "",
    address: "",
    logo: null,
    tagline: "",
  })

  const [logoPreview, setLogoPreview] = useState(null)

  // Products state
  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    description: "",
    price: "",
    images: [],
    quantity: "",
    categoryId: "",
    color: "",
    bigDescription: "",
    details: [""],
  })
  const [imageFiles, setImageFiles] = useState([])
  const [imagePreview, setImagePreview] = useState([])

  // Handle shop input changes
  const handleShopInputChange = (e) => {
    const { name, value } = e.target
    setShopData({
      ...shopData,
      [name]: value,
    })
  }

  // Handle logo upload
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

  // Handle product input changes
  const handleProductInputChange = (e) => {
    const { name, value } = e.target
    setCurrentProduct({
      ...currentProduct,
      [name]: value,
    })
  }

  // Handle product image upload
  const handleProductImageChange = (e) => {
    const files = Array.from(e.target.files)
    setImageFiles([...imageFiles, ...files])

    // Create preview URLs
    const newPreviews = []
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        newPreviews.push(reader.result)
        if (newPreviews.length === files.length) {
          setImagePreview([...imagePreview, ...newPreviews])
        }
      }
      reader.readAsDataURL(file)
    })
  }

  // Handle product details changes
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

  // Add product to list
  const addProduct = (e) => {
    e.preventDefault()
    
    // Validate required fields
    if (!currentProduct.name || !currentProduct.description || !currentProduct.price || 
        imageFiles.length === 0 || !currentProduct.quantity) {
      alert("Please fill all required product fields")
      return
    }
    
    // Create image paths (in a real app, these would be uploaded and URLs returned)
    const imagePaths = imageFiles.map((file, index) => `product-image-${Date.now()}-${index}`)
    
    const newProduct = {
      ...currentProduct,
      price: parseFloat(currentProduct.price),
      quantity: parseInt(currentProduct.quantity),
      images: imageFiles.length > 0 ? imagePaths : [],
    }
    
    console.log("New product added:", newProduct)


    setProducts([...products, newProduct])
    
    // Reset form
    setCurrentProduct({
      name: "",
      description: "",
      price: "",
      images: [],
      quantity: "",
      categoryId: "",
      color: "",
      bigDescription: "",
      details: [""],
    })
    setImageFiles([])
    setImagePreview([])
  }

  // Remove product from list
  const removeProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate required fields
    if (!shopData.name || !shopData.description || !shopData.category || !shopData.email || !shopData.logo) {
      alert("Please fill all required shop fields")
      return
    }
    
    // Combine shop data with products
    const formData = {
      shop: shopData,
      products: products,
    }

    createStore(formData.shop, formData.products)


    
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your API
    alert("Shop created successfully!")
  }

  return (
    <div className="create-shop-page">
     <HeaderBar pageName={'Create New Shop'} pagePath={['Home', "Create New Shop"]} />
     <div className="create-shop-container">
      <header className="header">
        <div className="header-content">
          <h1>Create New Shop</h1>
          <a href="/dashboard" className="back-link">Back to Dashboard</a>
        </div>
      </header>

      <main className="main-content">
        <form onSubmit={handleSubmit}>
          {/* Shop Information Section */}
          <section className="form-section">
            <h2 className="section-title">Shop Information</h2>
            
            <div className="form-group">
              <label htmlFor="name">Shop Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={shopData.name}
                onChange={handleShopInputChange}
                placeholder="Enter shop name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tagline">Tagline *</label>
              <input
                type="text"
                id="name"
                name="tagline"
                value={shopData.tagline}
                onChange={handleShopInputChange}
                placeholder="Enter tagline for shop"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Shop Description *</label>
              <textarea
                id="description"
                name="description"
                value={shopData.description}
                onChange={handleShopInputChange}
                placeholder="Describe your shop and what you sell"
                rows={4}
                required
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={shopData.category}
                onChange={handleShopInputChange}
                required
              >
                <option value="">Select a category</option>
                {shopCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="form-section">
            <h2 className="section-title">Contact Information</h2>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={shopData.email}
                onChange={handleShopInputChange}
                placeholder="shop@example.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={shopData.phone}
                onChange={handleShopInputChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={shopData.address}
                onChange={handleShopInputChange}
                placeholder="Enter your shop's physical address (if applicable)"
                rows={3}
              ></textarea>
            </div>
          </section>

          {/* Shop Logo Section */}
          <section className="form-section">
            <h2 className="section-title">Shop Logo</h2>
            
            <div className="form-group">
              <label htmlFor="logo">Shop Logo *</label>
              <p className="field-description">Upload a square logo (recommended size: 200x200px)</p>
              
              <div className="logo-upload-container">
                {logoPreview ? (
                  <div className="logo-preview">
                    <img src={logoPreview || "/placeholder.svg"} alt="Logo Preview" />
                    <button 
                      type="button" 
                      className="remove-logo-btn"
                      onClick={() => {
                        setShopData({...shopData, logo: null})
                        setLogoPreview(null)
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div className="logo-upload">
                    <label htmlFor="logo-upload" className="upload-label">
                      <span className="upload-icon">+</span>
                      <span>Upload Logo</span>
                    </label>
                    <input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                      required
                    />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="form-section">
            <h2 className="section-title">Products</h2>
            <p className="section-description">Add products to your shop</p>
            
            {/* Product Form */}
            <div className="product-form">
              <h3 className="subsection-title">Add New Product</h3>
              
              <div className="form-group">
                <label htmlFor="product-name">Product Name *</label>
                <input
                  type="text"
                  id="product-name"
                  name="name"
                  value={currentProduct.name}
                  onChange={handleProductInputChange}
                  placeholder="Enter product name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="product-description">Short Description *</label>
                <textarea
                  id="product-description"
                  name="description"
                  value={currentProduct.description}
                  onChange={handleProductInputChange}
                  placeholder="Brief product description"
                  rows={2}
                ></textarea>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="product-price">Price *</label>
                  <input
                    type="number"
                    id="product-price"
                    name="price"
                    value={currentProduct.price}
                    onChange={handleProductInputChange}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="product-quantity">Quantity *</label>
                  <input
                    type="number"
                    id="product-quantity"
                    name="quantity"
                    value={currentProduct.quantity}
                    onChange={handleProductInputChange}
                    placeholder="0"
                    min="0"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="product-category">Category</label>
                  <select
                    id="product-category"
                    name="category"
                    value={currentProduct.categoryId}
                    onChange={handleProductInputChange}
                  >
                    <option value="">Select a category</option>
                    {productCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="product-color">Color</label>
                  <input
                    type="text"
                    id="product-color"
                    name="color"
                    value={currentProduct.color}
                    onChange={handleProductInputChange}
                    placeholder="e.g. Red, Blue, Black"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="product-big-description">Detailed Description</label>
                <textarea
                  id="product-big-description"
                  name="bigDescription"
                  value={currentProduct.bigDescription}
                  onChange={handleProductInputChange}
                  placeholder="Detailed product description"
                  rows={4}
                ></textarea>
              </div>
              
              <div className="form-group">
                <label>Product Images *</label>
                <p className="field-description">Upload product images (recommended size: 800x800px)</p>
                
                <div className="image-upload-container">
                  <div className="image-previews">
                    {imagePreview.map((preview, index) => (
                      <div key={index} className="image-preview">
                        <img src={preview || "/placeholder.svg"} alt={`Product ${index + 1}`} />
                        <button 
                          type="button" 
                          className="remove-image-btn"
                          onClick={() => {
                            const newFiles = [...imageFiles]
                            const newPreviews = [...imagePreview]
                            newFiles.splice(index, 1)
                            newPreviews.splice(index, 1)
                            setImageFiles(newFiles)
                            setImagePreview(newPreviews)
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                    
                    <div className="image-upload">
                      <label htmlFor="product-images" className="upload-label">
                        <span className="upload-icon">+</span>
                        <span>Add Image</span>
                      </label>
                      <input
                        id="product-images"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleProductImageChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label>Product Details</label>
                <p className="field-description">Add key details about your product</p>
                
                {currentProduct.details.map((detail, index) => (
                  <div key={index} className="detail-input">
                    <input
                      type="text"
                      value={detail}
                      onChange={(e) => handleDetailChange(index, e.target.value)}
                      placeholder="e.g. Material: Cotton, Size: Large"
                    />
                    {currentProduct.details.length > 1 && (
                      <button 
                        type="button" 
                        className="remove-detail-btn"
                        onClick={() => removeDetailField(index)}
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
                
                <button 
                  type="button" 
                  className="add-detail-btn"
                  onClick={addDetailField}
                >
                  + Add Another Detail
                </button>
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="add-product-btn"
                  onClick={addProduct}
                >
                  Add Product
                </button>
              </div>
            </div>
            
            {/* Product List */}
            {products.length > 0 && (
              <div className="product-list">
                <h3 className="subsection-title">Added Products</h3>
                
                <div className="product-table">
                  <div className="product-table-header">
                    <div className="product-cell">Name</div>
                    <div className="product-cell">Price</div>
                    <div className="product-cell">Quantity</div>
                    <div className="product-cell">Category</div>
                    <div className="product-cell">Actions</div>
                  </div>
                  
                  {products.map((product, index) => (
                    <div key={index} className="product-row">
                      <div className="product-cell">{product.name}</div>
                      <div className="product-cell">${product.price.toFixed(2)}</div>
                      <div className="product-cell">{product.quantity}</div>
                      <div className="product-cell">{product.categoryId || "—"}</div>
                      <div className="product-cell">
                        <button 
                          type="button" 
                          className="remove-product-btn"
                          onClick={() => removeProduct(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Form Actions */}
          <div className="form-actions final-actions">
            <button type="button" className="cancel-btn" onClick={() => window.location.href = "/dashboard"}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Create Shop
            </button>
          </div>
        </form>
      </main>
     </div>
    </div>
  )
}
