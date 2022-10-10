const prefix = ['When you are having a bad day', 'If your poop is really smelly', 'If your gout is acting up'];

const quotes = ['Waste no more time arguing what a good man should be. Be One.', 'We are more often frightened than hurt; and we suffer more in imagination than in reality','Do not seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well.','I begin to speak only when I am certain what I will say is not better left unsaid.','What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.'];

const stoics = ['Marcus Aurelius','Cato','Epictetus','Victor Frankl','Seneca'];

//pick a random message out of any array of strings.
    function logRandMsg (arr) {
        let arrLength = arr.length;
        let selector = Math.floor(Math.random() * arrLength)
        return (arr[selector]);
    }

//Output a random message medley.
  console.log(`${logRandMsg(prefix)} always remember: ${logRandMsg(quotes)}... which may or may not have been said by ${logRandMsg(stoics)}.`);