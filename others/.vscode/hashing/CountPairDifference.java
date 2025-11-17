import java.util.HashMap;
import java.util.Map;

public class CountPairDifference {
    public int solve(int[] A, int B) {
        int N = A.length;
        int MOD = 1000000007;
        Map<Integer, Integer> freq = new HashMap<>();

        // since (i, j) and (j, i) are considered different, we need to initialize the
        // freq map beforehand
        for (int i = 0; i < N; i++) {
            if (freq.containsKey(A[i])) {
                freq.put(A[i], freq.get(A[i]) + 1);
            } else {
                freq.put(A[i], 1);
            }
        }

        int count = 0;
        for (int i = 0; i < N; i++) {
            int key = A[i] - B;
            if (freq.containsKey(key)) {
                count = (count + freq.get(key)) % MOD;
            }
        }

        return count;
    }
}
