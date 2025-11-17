import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class CommonElements {
    public int[] solve(int[] A, int[] B) {
        int N = A.length;
        int M = B.length;

        Map<Integer, Integer> map1 = new HashMap<>();
        Map<Integer, Integer> map2 = new HashMap<>();

        // initialize frequency of elements of A
        for (int i = 0; i < N; i++) {
            if (map1.get(A[i]) != null) {
                map1.put(A[i], map1.get(A[i]) + 1);
            } else {
                map1.put(A[i], 1);
            }
        }

        // initialize frequency of elements of B
        for (int i = 0; i < M; i++) {
            if (map2.get(B[i]) != null) {
                map2.put(B[i], map2.get(B[i]) + 1);
            } else {
                map2.put(B[i], 1);
            }
        }

        ArrayList<Integer> list = new ArrayList<>();
        for (int key : map1.keySet()) {
            if (map2.containsKey(key)) {
                int keyCount = Math.min(map1.get(key), map2.get(key));
                for (int i = 0; i < keyCount; i++) {
                    list.add(key);
                }
            }
        }

        return list.stream().mapToInt(i -> i).toArray();
    }
}
