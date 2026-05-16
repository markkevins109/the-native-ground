from PIL import Image
import os
for f in os.listdir('animals'):
    if f.endswith('.jpeg'):
        print(f"{f}: {Image.open(os.path.join('animals', f)).size}")
