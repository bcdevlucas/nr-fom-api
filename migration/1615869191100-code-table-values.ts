import {MigrationInterface, QueryRunner} from "typeorm";

export const codeTableValues = {
    'attachment_type_code': [
        { code: 'NOTICE', description: 'Interaction' },
        { code: 'INTERACTION', description: 'Interaction' }
    ],
    'response_code': [
        { code: '', description: '' },
    ],
    'submission_type_code': [
        { code: 'PROPOSED', description: 'Proposed' },
        { code: 'FINAL', description: 'Final' }
    ],
    'workflow_state_code': [
        { code: 'INITIAL', description: 'Initial' },
        { code: 'OPEN', description: 'Open' },
        { code: 'RESPONSE', description: 'Response' },
        { code: 'FINALIZED', description: 'Finalized' },
        { code: 'INVALIDATED', description: 'Invalidated' },
        { code: 'WITHDRAWN', description: 'Withdrawn' }
    ]
};

export class codeTableValues1615869191100 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        Object.keys(codeTableValues).map(async (tableName) => {
            const rows = codeTableValues[tableName];
            console.log(`generating code table values for: ${tableName}`);
            rows.map(async (row) => {
                let query = `INSERT INTO ${tableName} (code, description) VALUES ('${row.code}', '${row.description}')`;
                await queryRunner.query(query);
            });
        });

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
