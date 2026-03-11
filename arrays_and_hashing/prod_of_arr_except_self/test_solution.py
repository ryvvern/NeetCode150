from solution import Solution

sol = Solution()

def test_basic():
    assert sol.product([1, 2, 3, 4]) == [24, 12, 8, 6]

def test_two_elements():
    assert sol.product([2, 4]) == [4, 2]

def test_all_ones():
    assert sol.product([1, 1, 1, 1]) == [1, 1, 1, 1]

def test_one_zero():           
    assert sol.product([1,0,3,4]) == [0,12,0,0]

def test_two_zeros():          
    assert sol.product([0,0,3,4]) == [0,0,0,0]

def test_negatives():          
    assert sol.product([-1,2,-3,4]) == [-24,12,-8,6]

def test_all_negatives():      
    assert sol.product([-1,-2,-3,-4]) == [-24,-12,-8,-6]

def test_single_element():     
    assert sol.product([5]) == [1]
def test_large_numbers():      
    assert sol.product([100,200,300]) == [60000,30000,20000]