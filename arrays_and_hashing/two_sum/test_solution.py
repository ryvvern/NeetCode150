from solution import Solution

def test_basic_case():
    sol = Solution()
    assert sol.two_sum([2,7,11,15], 9) == [0,1]

def test_second_example():
    sol = Solution()
    assert sol.two_sum([3,2,4], 6) == [1,2]

def test_same_numbers():
    sol = Solution()
    assert sol.two_sum([3,3], 6) == [0,1]

def test_negative_numbers():
    sol = Solution()
    assert sol.two_sum([-1,-2,-3,-4,-5], -8) == [2,4]

def test_zero_target():
    sol = Solution()
    assert sol.two_sum([4,0,3,0], 0) == [1,3]