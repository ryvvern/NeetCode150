from solution import Solution

def test_with_duplicates():
    sol = Solution()
    assert sol.hasDuplicate([1, 2, 3, 3]) is True

def test_without_duplicates():
    sol = Solution()
    assert sol.hasDuplicate([1, 2, 3, 4]) is False

def test_empty_array():
    sol = Solution()
    assert sol.hasDuplicate([]) is False

def test_single_element():
    sol = Solution()
    assert sol.hasDuplicate([1]) is False

def test_all_duplicates():
    sol = Solution()
    assert sol.hasDuplicate([2, 2, 2, 2]) is True

