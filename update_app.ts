import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replacements
content = content.replace(
  'const BG_IMAGE = "https://res.cloudinary.com/dsevqnhts/image/upload/v1776449474/Design_sem_nome_16__page-0001_owwchm.jpg";',
  'const BG_IMAGE = "https://res.cloudinary.com/dsevqnhts/image/upload/v1778855067/Logo_sozinha_destacada_imagem_202605151123_cj4hxf.jpg";'
);

content = content.replace(/CR Representações/g, 'Ápice Consultoria');
content = content.replace(/PERNAMBUCO/g, 'BAHIA');
content = content.replace(/Há mais de 10 anos realizando sonhos./g, 'Guiando você até o Ápice dos seus sonhos.');

// Dark mode adaptations
content = content.replace(/text-slate-900/g, 'text-white');
content = content.replace(/text-slate-800/g, 'text-zinc-200');
content = content.replace(/text-slate-700/g, 'text-zinc-300');
content = content.replace(/text-slate-600/g, 'text-zinc-400');
content = content.replace(/text-slate-500/g, 'text-zinc-500');

// Background adaptations
content = content.replace(/bg-white\/40/g, 'bg-black/60');
content = content.replace(/bg-white\/50/g, 'bg-black/70');
content = content.replace(/bg-white\/60/g, 'bg-black/80');
content = content.replace(/bg-slate-100/g, 'bg-zinc-900');
content = content.replace(/border-slate-200/g, 'border-zinc-800');
content = content.replace(/border-zinc-100/g, 'border-zinc-800');

// Brand color adaptations: zinc-900 -> #D4AF37 (Gold)
// But be careful, text-zinc-900 and bg-zinc-900
content = content.replace(/text-zinc-900/g, 'text-[#D4AF37]');
content = content.replace(/bg-zinc-900/g, 'bg-[#D4AF37]');
content = content.replace(/text-zinc-800/g, 'text-[#B8942B]');
content = content.replace(/hover:bg-zinc-800/g, 'hover:bg-[#B8942B]');
content = content.replace(/hover:text-zinc-900/g, 'hover:text-[#D4AF37]');
content = content.replace(/focus:ring-zinc-900/g, 'focus:ring-[#D4AF37]');
content = content.replace(/shadow-zinc-900/g, 'shadow-[#D4AF37]');
content = content.replace(/bg-zinc-100/g, 'bg-white/10');
content = content.replace(/border-zinc-900/g, 'border-[#D4AF37]');

// Change text colors inside the gold buttons to black
content = content.replace(/bg-\[\#D4AF37\] text-white/g, 'bg-[#D4AF37] text-black');
content = content.replace(/text-zinc-950/g, 'text-[#D4AF37]');

// Remove static text shadows that look bad on dark backgrounds
content = content.replace(/\[text-shadow:_0_2px_15px_rgba\(255,255,255,1\),_0_0_30px_rgba\(255,255,255,1\)\]/g, 'drop-shadow-lg');
content = content.replace(/\[text-shadow:_0_1px_10px_rgba\(255,255,255,1\),_0_0_15px_rgba\(255,255,255,1\)\]/g, 'drop-shadow-md');

// Main page background wrap from bg-white to bg-[#0b0b0b]
content = content.replace(/bg-white/g, 'bg-[#0b0b0b]');

fs.writeFileSync('src/App.tsx', content);

// Now update index.css
let cssContent = fs.readFileSync('src/index.css', 'utf-8');
cssContent = cssContent.replace('--color-brand-primary: #0b0b0b;', '--color-brand-primary: #D4AF37;');
cssContent = cssContent.replace('background-color: #f8fafc;', 'background-color: #0b0b0b;');
cssContent = cssContent.replace('color: #0f172a;', 'color: #f8fafc;');
fs.writeFileSync('src/index.css', cssContent);

// Now update index.html title
let htmlContent = fs.readFileSync('index.html', 'utf-8');
htmlContent = htmlContent.replace('<title>CR Representações - Consórcios</title>', '<title>Ápice Consultoria em Consórcios</title>');
htmlContent = htmlContent.replace('https://res.cloudinary.com/dsevqnhts/image/upload/v1776449474/Design_sem_nome_16__page-0001_owwchm.jpg', 'https://res.cloudinary.com/dsevqnhts/image/upload/v1778855067/Logo_sozinha_destacada_imagem_202605151123_cj4hxf.jpg');
fs.writeFileSync('index.html', htmlContent);

console.log('App updated.');
