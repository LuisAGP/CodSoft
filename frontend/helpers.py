from PIL import Image
from io import BytesIO
from django.core.files import File

'''
Function for check if a list of values is in a String
@author Luis GP
@param {values} str or List: values to search
@param {string} str: string where search
@return {Boolean}
'''
def isInString(values, string):
    
    if type(values) == str:
        return values in string

    else:
        for i in values:
            if i in string:
                return True
    
    return False



def compress_image(file):
    
    image = Image.open(file)
    width, height = image.size
    max_size = 500

    if height > width:
        width = int(max_size * width / height)
        height = max_size
    else:
        height = int(max_size * height / width)
        width = max_size

    image = image.resize((width, height))
    image = image.convert('RGB')

    byte_io = BytesIO()
    image.save(byte_io,format="JPEG",optimize=True,quality=90)

    image_file = File(byte_io, f"___compress_{file}")

    return image_file
