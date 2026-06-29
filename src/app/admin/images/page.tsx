'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Trash2, Upload, Edit3, Plus } from 'lucide-react';
import ImageUpload from '@/components/ImageUpload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { SiteImage } from '@/types';

// Initial demo images
const initialImages: SiteImage[] = [
  {
    id: '1',
    name: 'Hero Image',
    category: 'hero',
    cloudinaryUrl: 'https://images.unsplash.com/photo-1517336714731-489679fd66a8?w=800',
    publicId: 'hero_image',
    uploadedAt: new Date(),
  },
  {
    id: '2',
    name: 'Product 1',
    category: 'product',
    cloudinaryUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    publicId: 'product_1',
    uploadedAt: new Date(),
  },
  {
    id: '3',
    name: 'About Us',
    category: 'about',
    cloudinaryUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
    publicId: 'about_us',
    uploadedAt: new Date(),
  },
];

export default function AdminImagesPage() {
  const [images, setImages] = useState<SiteImage[]>(initialImages);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newImage, setNewImage] = useState<Omit<SiteImage, 'id' | 'uploadedAt'>>({
    name: '',
    category: 'other',
    cloudinaryUrl: '',
    publicId: '',
  });

  const handleAddImage = (url: string, publicId: string) => {
    const image: SiteImage = {
      id: Date.now().toString(),
      name: newImage.name || `Image ${images.length + 1}`,
      category: newImage.category,
      cloudinaryUrl: url,
      publicId,
      uploadedAt: new Date(),
    };
    setImages([...images, image]);
    setNewImage({ name: '', category: 'other', cloudinaryUrl: '', publicId: '' });
  };

  const handleDeleteImage = (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setImages(images.filter(img => img.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Image Management</h1>

      {/* Add New Image */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Plus className="h-5 w-5" /> Upload New Image
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image Name</label>
              <Input
                value={newImage.name}
                onChange={(e) => setNewImage({ ...newImage, name: e.target.value })}
                placeholder="e.g., Hero Banner"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <Select
                value={newImage.category}
                onValueChange={(val: any) => setNewImage({ ...newImage, category: val })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hero">Hero</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="about">About</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
            <ImageUpload
              onUploadComplete={handleAddImage}
            />
          </div>
        </div>
      </div>

      {/* Image List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">All Images</h2>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video relative bg-gray-100">
                <Image
                  src={image.cloudinaryUrl}
                  alt={image.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 truncate">{image.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{image.category}</p>
                <div className="flex gap-2 mt-4">
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    <Edit3 className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleDeleteImage(image.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
