/*
    struct FinalClassificationData
    {
        uint8     m_position;              // Finishing position
        uint8     m_numLaps;               // Number of laps completed
        uint8     m_gridPosition;          // Grid position of the car
        uint8     m_points;                // Number of points scored
        uint8     m_numPitStops;           // Number of pit stops made
        uint8     m_resultStatus;          // Result status - 0 = invalid, 1 = inactive, 2 = active
                                           // 3 = finished, 4 = disqualified, 5 = not classified
                                           // 6 = retired
        float     m_bestLapTime;           // Best lap time of the session in seconds
        double    m_totalRaceTime;         // Total race time in seconds without penalties
        uint8     m_penaltiesTime;         // Total penalties accumulated in seconds
        uint8     m_numPenalties;          // Number of penalties applied to this driver
        uint8     m_numTyreStints;         // Number of tyres stints up to maximum
        uint8     m_tyreStintsActual[8];   // Actual tyres used by this driver
        uint8     m_tyreStintsVisual[8];   // Visual tyres used by this driver
    };
*/

const Parser = require('binary-parser').Parser;

const finalClassification = new Parser()
    .uint8('m_position')
    .uint8('m_numLaps')
    .uint8('m_gridPosition')
    .uint8('m_points')
    .uint8('m_numPitStops')
    .uint8('m_resultStatus')
    .floatle('m_bestLapTime')
    .doublele('m_totalRaceTime')
    .uint8('m_penaltiesTime')
    .uint8('m_numPenalties')
    .uint8('m_numTyreStints')
    .array('m_tyreStintsActual', {
        length: 8,
        type: new Parser().uint8(''),
    })
    .array('m_tyreStintsVisual', {
        length: 8,
        type: new Parser().uint8(''),
    });

module.exports = finalClassification;
