import React, { useState } from 'react';
import TopBar from './TopBar';

export default function ImageGallery({ nav }) {
  const [images, setImages] = useState(() => {
    try { return JSON.parse(localStorage.getItem('galleryImages') || '[]'); } catch { return []; }
  });
  const [selected, setSelected] = useState([]);
  const [groupSize, setGroupSize] = useState(3);
  const [imageText, setImageText] = useState('');
  const [generatingPrompt, setGeneratingPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const saveToStorage = (updatedImages) => {
    localStorage.setItem('galleryImages', JSON.stringify(updatedImages));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = { id: Date.now() + Math.random(), data: event.target.result, added: new Date().toLocaleDateString('he-IL') };
        const updatedImages = [...images, newImage];
        if (updatedImages.length > 100) updatedImages.shift();
        setImages(updatedImages);
        saveToStorage(updatedImages);
      };
      reader.readAsDataURL(file);
    });
  };

  const addTextImage = () => {
    if (!imageText.trim()) return;
    const newImage = {
      id: Date.now() + Math.random(),
      text: imageText,
      isText: true,
      added: new Date().toLocaleDateString('he-IL'),
      emoji: '📝'
    };
    const updatedImages = [...images, newImage];
    if (updatedImages.length > 100) updatedImages.shift();
    setImages(updatedImages);
    saveToStorage(updatedImages);
    setImageText('');
  };

  const generateImageFromText = async () => {
    if (!generatingPrompt.trim()) return;
    setIsGenerating(true);
    
    try {
      // Fallback: Use placeholder/emoji based image
      const colors = ['#FFB6C1', '#87CEEB', '#98FB98', '#FFE4B5', '#DDA0DD', '#F0E68C'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const canvas = document.createElement('canvas');
      canvas.width = 300;
      canvas.height = 300;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 300, 300);
      ctx.fillStyle = '#333';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(generatingPrompt.substring(0, 20), 150, 150);
      
      const newImage = {
        id: Date.now() + Math.random(),
        data: canvas.toDataURL(),
        isGenerated: true,
        prompt: generatingPrompt,
        added: new Date().toLocaleDateString('he-IL'),
        emoji: '🤖'
      };
      
      const updatedImages = [...images, newImage];
      if (updatedImages.length > 100) updatedImages.shift();
      setImages(updatedImages);
      saveToStorage(updatedImages);
      setGeneratingPrompt('');
    } catch (err) {
      console.error('Error generating image:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const deleteImage = (id) => {
    const updatedImages = images.filter(img => img.id !== id);
    setImages(updatedImages);
    setSelected(selected.filter(sel => sel !== id));
    saveToStorage(updatedImages);
  };

  const toggleSelect = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  const handleComplete = () => {
    const storyData = {
      selectedImages: selected,
      groupSize,
      timestamp: new Date().toISOString(),
      imageData: selected.map(id => images.find(img => img.id === id))
    };
    localStorage.setItem('lastStoryGroup', JSON.stringify(storyData));
    alert(`✅ שמור! בחרת ${selected.length} תמונות בקבוצה של ${groupSize}`);
    setSelected([]);
  };

  const canComplete = selected.length === groupSize;

  return (
    <div style={{ padding: 16, minHeight: '100vh', background: '#fafbf9' }}>
      <TopBar title="ניהול תמונות" onBack={() => nav('home')} />

      <div style={{ background: 'white', borderRadius: 16, border: '2px solid #d4ebd4', padding: 16, marginBottom: 16 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#7aab96', marginBottom: 10 }}>📸 זה התמונות שלך ({images.length}/100)</div>
        
        <div style={{ marginBottom: 14 }}>
          <label style={{ display: 'block', background: '#e8f7f0', border: '2px dashed #b8ddd0', borderRadius: 12, padding: 12, textAlign: 'center', cursor: 'pointer', transition: 'background .2s' }}>
            <div style={{ fontSize: 20, marginBottom: 4 }}>📤</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#2e7d5a', marginBottom: 2 }}>העלאת תמונות</div>
            <div style={{ fontSize: 10, color: '#7aab96' }}>לחצי או גררו</div>
            <input type="file" multiple accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
          </label>
        </div>

        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          <input 
            type="text"
            value={imageText}
            onChange={(e) => setImageText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTextImage()}
            placeholder="כתבו טקסט/מילה"
            style={{ flex: 1, padding: 8, borderRadius: 8, border: '2px solid #b8ddd0', fontSize: 12, fontFamily: 'inherit' }}
          />
          <button onClick={addTextImage}
            style={{ background: '#e8f7f0', border: '2px solid #b8ddd0', borderRadius: 8, padding: '8px 10px', fontSize: 11, fontWeight: 700, cursor: 'pointer', color: '#2e7d5a' }}>
            ➕
          </button>
        </div>

        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          <input 
            type="text"
            value={generatingPrompt}
            onChange={(e) => setGeneratingPrompt(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && generateImageFromText()}
            placeholder="תארו תמונה (כ.למעלה: 'יום שמש')"
            style={{ flex: 1, padding: 8, borderRadius: 8, border: '2px solid #d4a574', fontSize: 12, fontFamily: 'inherit' }}
          />
          <button onClick={generateImageFromText} disabled={isGenerating}
            style={{ background: '#fff0e8', border: '2px solid #d4a574', borderRadius: 8, padding: '8px 10px', fontSize: 11, fontWeight: 700, cursor: isGenerating ? 'default' : 'pointer', color: '#d4804a', opacity: isGenerating ? 0.6 : 1 }}>
            {isGenerating ? '⏳' : '🤖'}
          </button>
        </div>

        <div style={{ background: '#f0faf0', borderRadius: 10, border: '2px solid #b8ddd0', padding: 10 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#7aab96', marginBottom: 6 }}>🎯 בחרו כמה תמונות כקבוצה:</div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[1, 2, 3, 4, 5].map(n => (
              <button key={n} onClick={() => setGroupSize(n)}
                style={{ flex: 1, padding: 6, borderRadius: 6, border: `2px ${groupSize === n ? 'solid' : 'dashed'} ${groupSize === n ? '#5aab8a' : '#b8ddd0'}`, background: groupSize === n ? '#e8f7f0' : 'white', fontSize: 11, fontWeight: 700, cursor: 'pointer', color: groupSize === n ? '#2e7d5a' : '#7aab96', transition: 'all .2s' }}>
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ fontSize: 11, fontWeight: 700, color: '#7aab96', marginBottom: 8 }}>🖼️ בחרו {selected.length}/{groupSize}:</div>
      
      {images.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 30, background: 'white', borderRadius: 12, border: '2px dashed #b8ddd0', color: '#b8ddd0' }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>📁</div>
          <div style={{ fontSize: 12, fontWeight: 700 }}>אין תמונות עדיין</div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6, marginBottom: 14 }}>
          {images.map(img => {
            const isSelected = selected.includes(img.id);
            const isDisabled = !isSelected && selected.length >= groupSize;
            return (
              <div key={img.id} style={{ position: 'relative' }}>
                <div 
                  onClick={() => !isDisabled && toggleSelect(img.id)}
                  style={{
                    borderRadius: 8,
                    border: `2px solid ${isSelected ? '#5aab8a' : '#b8ddd0'}`,
                    background: isSelected ? '#e8f7f0' : 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: isDisabled ? 'default' : 'pointer',
                    opacity: isDisabled ? 0.4 : 1,
                    transition: 'all .2s',
                    aspectRatio: '1',
                    position: 'relative',
                    overflow: 'hidden',
                    fontSize: 10
                  }}
                >
                  {img.isText || img.isGenerated ? (
                    <div style={{ textAlign: 'center', padding: 4, fontSize: 8 }}>
                      <div style={{ fontSize: 16, marginBottom: 2 }}>{img.emoji}</div>
                      <div style={{ fontWeight: 700, color: '#2d4a3e', wordBreak: 'break-word', lineHeight: 1.2 }}>{img.text || img.prompt}</div>
                    </div>
                  ) : (
                    <img src={img.data} alt="gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                  {isSelected && (
                    <div style={{ position: 'absolute', top: 2, right: 2, background: '#5aab8a', color: 'white', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>
                      ✓
                    </div>
                  )}
                </div>
                <button onClick={() => deleteImage(img.id)}
                  style={{ position: 'absolute', top: 1, left: 1, background: '#e76f51', color: 'white', border: 'none', borderRadius: 4, width: 16, height: 16, fontSize: 10, cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ✕
                </button>
              </div>
            );
          })}
        </div>
      )}

      {images.length > 0 && (
        <button onClick={handleComplete}
          disabled={!canComplete}
          style={{
            width: '100%',
            padding: 12,
            borderRadius: 10,
            border: 'none',
            background: canComplete ? '#5aab8a' : '#b8ddd0',
            color: 'white',
            fontSize: 13,
            fontWeight: 800,
            cursor: canComplete ? 'pointer' : 'default',
            opacity: canComplete ? 1 : 0.6,
            transition: 'all .2s'
          }}>
          ✅ סיימתי ({selected.length}/{groupSize})
        </button>
      )}
    </div>
  );
}
