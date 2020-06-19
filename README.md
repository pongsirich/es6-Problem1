# Javascript ES6-Problem1
### Problem
- **จงแก้ไขให้ปุ่ม Dont Push me สามารถทำงานได้อย่างถูกต้อง**
---
**Before Edit**

![Recordit GIF](http://g.recordit.co/xt5e2Y1Bke.gif)

## Sample of app.js

```javascript
const btnDontPush = document.getElementById('btnDontPush')

btnDontPush.addEventListener('click', function () {
  const clicked = function () {
    this.textContent = 'Why you clicked me 😑'
    this.className = 'big-button-red'
  }
  clicked()
})

```

---

**Result**

![Recordit GIF](http://g.recordit.co/ySYrFDlKsq.gif)

---
### เงื่อนไข

- **ห้ามใช้ตัวแปร btnDontPush ที่ประกาศไว้**
