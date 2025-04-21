import React from 'react';
import ReactDOM from 'react-dom/client';
import JejakNusantara from './JejakNusantara';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JejakNusantara />);

<section>
  <h2>Sejarah Penjajahan hingga Kemerdekaan</h2>
  <ul>
    <li><strong>1602:</strong> VOC mulai beroperasi di Indonesia.</li>
    <li><strong>1799:</strong> VOC dibubarkan, kekuasaan diambil alih oleh Belanda.</li>
    <li><strong>1942:</strong> Jepang menduduki Indonesia.</li>
    <li><strong>1945:</strong> Indonesia memproklamasikan kemerdekaannya pada 17 Agustus.</li>
  </ul>
</section>
<section>
  <h2>Sejarah Penjajahan hingga Kemerdekaan</h2>
  <div class="timeline">
    <div class="timeline-item">
      <h3>1602</h3>
      <p>VOC mulai beroperasi di Indonesia sebagai kekuatan dagang Belanda.</p>
    </div>
    <div class="timeline-item">
      <h3>1799</h3>
      <p>VOC dibubarkan dan Belanda secara resmi mengambil alih kekuasaan kolonial.</p>
    </div>
    <div class="timeline-item">
      <h3>1942</h3>
      <p>Jepang menduduki Indonesia dan mengakhiri pemerintahan Belanda sementara waktu.</p>
    </div>
    <div class="timeline-item">
      <h3>1945</h3>
      <p>Indonesia memproklamasikan kemerdekaan pada 17 Agustus.</p>
    </div>
  </div>
</section>
