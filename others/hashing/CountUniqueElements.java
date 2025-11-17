import java.util.HashMap;
import java.util.Map;

public class CountUniqueElements {
    public int solve(int[] A) {
        int N = A.length;
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();

        for (int i = 0; i < N; i++) {
            if (map.containsKey(A[i])) {
                map.put(A[i], map.get(A[i]) + 1);
            } else {
                map.put(A[i], 1);
            }
        }

        int count = 0;
        for (int counter : map.values()) {
            if (counter == 1) {
                count++;
            }
        }

        return count;
    }
}
