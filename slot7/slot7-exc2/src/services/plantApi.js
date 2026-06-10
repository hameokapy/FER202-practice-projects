const MOCK_PLANTS = [
  {
    id: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    difficulty: 'Dễ',
    tags: ['Cây Monstera', 'Trầu Bà Lá Xẻ'],
    description: 'Monstera Deliciosa là loại cây cảnh nội thất phổ biến với lá xẻ độc đáo. Cây dễ trồng, thích hợp cho người mới bắt đầu và có khả năng thanh lọc không khí tốt.',
    imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop',
    metrics: [
      { id: 'water', label: 'Tưới nước', value: '7-10 ngày/lần', type: 'water' },
      { id: 'light', label: 'Ánh sáng', value: 'Ánh sáng gián tiếp', type: 'light' },
      { id: 'temperature', label: 'Nhiệt độ', value: '21-25°C', type: 'temperature' },
      { id: 'humidity', label: 'Độ ẩm', value: '60-80%', type: 'humidity' }
    ]
  }
];

export const plantApi = {
  getPlantById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const plant = MOCK_PLANTS.find(p => p.id === id);
        if (plant) resolve(plant);
        else reject(new Error('Không tìm thấy thông tin cây cảnh'));
      }, 500);
    });
  }
};