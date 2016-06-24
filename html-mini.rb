require 'html5small'
file_name = 'index.html'

html = File.read(file_name)
print ::HTML5small.minify html
