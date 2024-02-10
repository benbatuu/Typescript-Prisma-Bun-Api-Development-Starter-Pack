import pc from '../src/helpers/prismaclient.singleton';

async function main() {

}

main()
    .then(async () => {
        await pc.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await pc.$disconnect();
        process.exit(1);
    });
