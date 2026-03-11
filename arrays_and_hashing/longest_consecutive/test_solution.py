import pytest
from naive_solution import Solution

@pytest.fixture
def sol():
    return Solution()


def test_empty_list(sol):
    assert sol.longestConsecutive([]) == 0

def test_single_element(sol):
    assert sol.longestConsecutive([1]) == 1

def test_two_consecutive(sol):
    assert sol.longestConsecutive([1, 5]) == 1

def test_standard_case(sol):
    assert sol.longestConsecutive([100, 3, 56, 2, 5, 1, 90, 4]) == 5

def test_longer_sequence(sol):
    assert sol.longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]) == 9

def test_duplicates(sol):
    assert sol.longestConsecutive([1, 2, 2, 3]) == 3

def test_all_duplicates(sol):
    assert sol.longestConsecutive([5, 5, 5, 5]) == 1

def test_already_sorted(sol):
    assert sol.longestConsecutive([1, 2, 3, 4, 5]) == 5

def test_reverse_sorted(sol):
    assert sol.longestConsecutive([5, 4, 3, 2, 1]) == 5

def test_negative_numbers(sol):
    assert sol.longestConsecutive([-3, -2, -1, 0, 1]) == 5

def test_all_negative(sol):
    assert sol.longestConsecutive([-5, -4, -3, -10]) == 3

def test_no_consecutive(sol):
    assert sol.longestConsecutive([10, 20, 30, 40]) == 1

def test_two_separate_sequences(sol):
    assert sol.longestConsecutive([1, 2, 3, 7, 8, 9]) == 3

def test_large_range(sol):
    assert sol.longestConsecutive(list(range(10000))) == 10000

