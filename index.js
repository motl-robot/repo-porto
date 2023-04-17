function showAnimation () {
    document.body.classList.toggle('loading');
  }
  
  document.querySelectorAll('a[href]').forEach(a => a.addEventListener('click', showAnimation))
  