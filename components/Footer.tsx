import Link from 'next/link'

export function Footer() {
  return(
    <div className="pb-44">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAu9JREFUWEftV+1x2kAQ3dXxP3YFcSowriDWaMXfJBUYV2BcQXAFxhWEVBB+o2OEK4jdAXRAAYjNLCOY03EnnQiZeDK5P56x7uPt27e7D4Q3tvCN4YF/A9B0Ou0i4g0idgHgDADkr6wXAFgx8wszT3q93nPbDLRiKMuyISLelSBC3loh4iiKoqc4jlchB4IAaa0/A8AjAFyEXOrYswCAeyKaNJ1vBFSy8rXpopDvzDxK0/S+bm8tIK31GABuQh5rsWdMRLe+/V5As9lswMySpj+xnoho4LrYCajUzA/rwBdEPNtsNn1E/BiCkpmfoygabzabBSLm9n0uTfkAiQjfGxe8EtGutCHLsmtEFAalzOfWQ/JN9kpq9iLOsmxuBbJQSl3Z1XcAaDab9Zn5m/mIRJqm6XUIK749DkDAzA9pmg7NMweAtNY2O9uGR0RXpwYkTZSIzr2ApANHUfTTfvgUDGmtJX2fHHfHaZru015hyFdZSqkPcRwLc0evPM8viqIQzb2zLqlUXAWQJ8+/rZ8dABdLNvshgA6EdyxNnq5f0WcFkEvQrko4MSAgoj2ORkAA4O2qbYH55qIX0N/QEAAsiWjvImyGnKWplDoP9TN1rGmtxRNVqqxW1L6yP4WOfOmy764w5GuMEjUi3iZJInak9aq7l5n9jVFesirtFQAudwjEYHU6HbGjQU0yz3NxB3fMXJlXRkQV/WwDt8M1h6uwEkXRpCgKYcZs+zK55y6vLCDW6/WgnOy1AxkR75MkGdUO15IlafFbZuSQeJqiKGTemGx5O3ig01wqpbqN9kNAlH5nb6hklsn/i6KQaIQpSeXQZ9o9Bq+SDFs7u491Ftb0RbU+2E67HZBjwnvHURuTP1ZKPYQIugHQdyLq+0q18WeQy0HKZT7KXSk3qrRxUDcCMh4Q/ZiirvQPM2IHQ0tm7ptG7GiGzIMlW/Lz5bKOIaMRLhFx2KahBjFkRyPur0lLIXtcLB0FqPXsaHHgP6Amsn4BNnSpNHhlSMwAAAAASUVORK5CYII="/>
        <p className="text-grey">Created by <Link href="https://github.com/konhi" passHref>Jan Szymański, </Link><Link href="https://github.com/wybran" passHref>Krystian Wybranowski, </Link><Link href="https://github.com/mopsior" passHref>Bartosz Sułkowski, </Link><Link href="https://github.com/bkmac511" passHref>Bartosz Maciejewski</Link> with ❤️</p>
    </div>
  )
}