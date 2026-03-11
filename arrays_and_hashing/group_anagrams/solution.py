class Solution:
    def group_anagrams(self, strs):
        groups = {}

        for word in strs:
            sorted_word = ''.join(sorted(word))

            if sorted_word in groups:
                groups[sorted_word].append(word)
            groups[sorted_word] = []

        return list(groups.values())
            