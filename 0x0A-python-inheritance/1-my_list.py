#!/usr/bin/python3
"""
contains the MyList class
"""


class MyList:
    """a subclass of list"""

    def __init__(self):
        """initializes the object"""
        super().__init__(self)

    def print_sorted(self):
        """prints sorted list"""
        print(sorted(self))
