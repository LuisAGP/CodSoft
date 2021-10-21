
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
