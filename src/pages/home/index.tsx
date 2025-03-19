import { AnimatePresence, motion } from 'framer-motion';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface DataPoint {
  id: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
}

export const Home: FC = () => {
  const [metrics, setMetrics] = useState<DataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const fetchMetrics = useCallback(async () => {
    try {
      // Simulate API call
      const response = await new Promise<DataPoint[]>((resolve) =>
        setTimeout(
          () =>
            resolve([
              { id: '1', value: 89, trend: 'up' },
              { id: '2', value: 64, trend: 'down' },
              { id: '3', value: 76, trend: 'stable' },
            ]),
          1500
        )
      );
      setMetrics(response);
    } catch (error) {
      console.error('Error fetching metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const aggregatedData = useMemo(() => {
    return metrics.reduce((acc, curr) => acc + curr.value, 0) / metrics.length;
  }, [metrics]);

  useEffect(() => {
    fetchMetrics();
  }, [fetchMetrics]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex flex-col items-center justify-center min-h-screen`}
    >
      <div ref={ref} className="w-full max-w-4xl px-4">
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              key="loading"
              exit={{ opacity: 0 }}
              className="flex justify-center"
            >
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent" />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="space-y-8"
            >
              <h1 className="text-4xl font-bold text-center">
                Interactive Dashboard Overview
              </h1>
              {inView && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {metrics.map((metric) => (
                    <motion.div
                      key={metric.id}
                      whileHover={{ scale: 1.05 }}
                      className="p-6 bg-blue-100 rounded-lg shadow-lg"
                    >
                      <h3 className="text-xl font-semibold">
                        Metric {metric.id}
                      </h3>
                      <p className="text-2xl">{metric.value}%</p>
                      <span
                        className={`text-${
                          metric.trend === 'up'
                            ? 'green'
                            : metric.trend === 'down'
                            ? 'red'
                            : 'yellow'
                        }-500`}
                      >
                        {metric.trend}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

              <div className="text-center">
                <p className="text-xl">
                  Average Performance: {aggregatedData.toFixed(2)}%
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
