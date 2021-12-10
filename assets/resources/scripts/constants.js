var base = document.createElement('base')
base.href = '//' + document.location + '/' + location.href.split('/')[3] + '/';
document.getElementsByTagName('head')[0].appendChild(base);
