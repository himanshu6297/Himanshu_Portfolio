import useCounterAnimation from '../hooks/useCounterAnimation';

export default function AnimatedCounter({ end, label }) {
  const count = useCounterAnimation(end, 2500);

  return (
    <div className="flex flex-col items-center" data-aos="zoom-in">
      <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
        {count}{label === 'Years Experience' ? '+' : label === 'Major Projects' ? '' : '+'}
      </span>
      <span className="text-gray-600 dark:text-gray-400 font-semibold mt-2">{label}</span>
    </div>
  );
}
