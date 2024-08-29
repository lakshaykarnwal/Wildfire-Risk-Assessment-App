import React from 'react';

const ClusteringResult = ({ clusters }) => {
  return (
    <div>
      <h2>Clustering Results</h2>
      {clusters.length > 0 ? (
        clusters.map((cluster, index) => (
          <div key={index}>
            <h4>Cluster {index + 1}</h4>
            <img src={cluster.image} alt={`Cluster ${index + 1}`} width="300" />
            <p>{cluster.description}</p>
          </div>
        ))
      ) : (
        <p>No clusters found.</p>
      )}
    </div>
  );
};

export default ClusteringResult;
