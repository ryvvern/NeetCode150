from solution import Solution

def test_true_cases():
    sol = Solution()
    assert sol.isAnagram('racecar', 'carrace') is True
    assert sol.isAnagram('read', 'dare') is True

def test_false_cases():
    sol = Solution()
    assert sol.isAnagram('love', 'move') is False

def test_different_lengths():
    sol = Solution()
    sol.isAnagram('racecar', 'race') is False

def test_empty_strings():
    sol = Solution()
    sol.isAnagram('', '') is True

def test_single_chars():
    sol = Solution()
    sol.isAnagram('s', 's') is True
